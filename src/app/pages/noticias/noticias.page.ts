import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NoticiasService, Noticia } from '../../services/noticias.service';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular'; // ← Agregar esta importación
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon
  ]
})
export class NoticiasPage implements OnInit {
  
  noticias$: Observable<Noticia[]>;

  constructor(
    private noticiasService: NoticiasService,
    private platform: Platform
  ) {
    this.noticias$ = this.noticiasService.getNoticias();
  }

  ngOnInit() {
    this.verificarPlataforma();
  }

   verificarPlataforma() {
    this.platform.ready().then(() => {
      console.log('=== VERIFICACIÓN DE PLATAFORMA ===');
      console.log('Android:', this.platform.is('android'));
      console.log('iOS:', this.platform.is('ios'));
      console.log('Hybrid:', this.platform.is('hybrid'));
      console.log('Desktop:', this.platform.is('desktop'));
      console.log('Mobile:', this.platform.is('mobile'));
      console.log('Navegador:', this.platform.is('mobileweb'));
      console.log('==============================');
    }).catch(error => {
      console.error('Error al verificar plataforma:', error);
    });
  }


  // Método para eliminar noticia
  async eliminarNoticia(noticia: Noticia) {
    if (noticia.id) {
      try {
        await this.noticiasService.eliminarNoticia(noticia.id);
        console.log('Noticia eliminada:', noticia.id);
      } catch (error) {
        console.error('Error al eliminar noticia:', error);
      }
    }
  }

  // Método para formatear fecha
formatearFecha(fecha: string): string {
  // Crear fecha ajustando por zona horaria
  const fechaAjustada = new Date(fecha + 'T00:00:00'); // Agregar tiempo para evitar cambio de zona horaria
  
  return fechaAjustada.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
}
