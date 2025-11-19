import { Component } from '@angular/core';
//import { IonicModule } from '@ionic/angular';
//import { CommonModule } from '@angular/common';
import{
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import {RouterModule} from '@angular/router';
import {addIcons} from 'ionicons';
import { newspaper, add } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,  
  imports: [
    //componentes de Ionic
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    //RouterModule para routerLink
    RouterModule
    ]  
})
export class TabsPage {
  constructor() {
    //Registro de los iconos de las tabs
    addIcons({newspaper, add});
  }
}
