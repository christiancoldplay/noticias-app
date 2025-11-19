import { Component } from '@angular/core';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButton,
  IonInput,
  IonTextarea,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonLabel,
  IonItem
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiasService } from '../../services/noticias.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
  standalone: true,
  imports: [
    //componentes de ionic
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonTextarea,
    IonLabel,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    //modulos de Angular  
    CommonModule,
    FormsModule
  ]
})
export class AgregarPage {
  
  nuevaNoticia = {
    titulo: '',
    fecha: '',
    descripcion: ''
  };

  enviando = false;

  constructor(
    private noticiasService: NoticiasService,
    private router: Router
  ) { 
    //Registrar el ícono del botón
    addIcons({addCircle});
  }

  // Método para agregar noticia
  async agregarNoticia() {
    if (this.enviando) return;
    
    this.enviando = true;
    
    try {
      await this.noticiasService.agregarNoticia(this.nuevaNoticia);
      console.log('Noticia agregada exitosamente');
      
      // Limpiar formulario
      this.nuevaNoticia = {
        titulo: '',
        fecha: '',
        descripcion: ''
      };
      
      // Navegar a la lista de noticias
      this.router.navigate(['/tabs/noticias']);
      
    } catch (error) {
      console.error('Error al agregar noticia:', error);
    } finally {
      this.enviando = false;
    }
  }
}