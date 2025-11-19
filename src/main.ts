import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

// Importación directa de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from './environments/environment';

// Importar y configurar iconos de Ionic
import { addIcons } from 'ionicons';
import { trash, newspaperOutline, addCircle, newspaper, add } from 'ionicons/icons';

// Importar defineCustomElements para Android
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Agregar los iconos que necesitas
addIcons({
  'trash': trash,
  'newspaper-outline': newspaperOutline,
  'add-circle': addCircle,
  'newspaper': newspaper,
  'add': add
});

// Android
defineCustomElements(window);

// Inicializar Firebase y exportar db
export const app = initializeApp(environment.firebaseConfig);
export const db = getFirestore(app);

console.log('Firebase inicializado correctamente');

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});