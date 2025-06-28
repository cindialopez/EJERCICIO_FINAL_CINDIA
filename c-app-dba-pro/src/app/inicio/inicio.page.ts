// Elaborado por: Cindia López, Junio 2025
// Ejercicio 1. Sesión Didáctica 1 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo TypeScript del componente InicioPage
// Este archivo forma parte de la Fase I del proyecto. Define la estructura base de la pantalla de inicio de la aplicación móvil.
// No se realizaron modificaciones en la Fase II, ya que su función es meramente visual y no requiere lógica adicional.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importación de componentes de Ionic utilizados en la vista de inicio
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonCard,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonIcon,
  IonList,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio', // Selector del componente
  templateUrl: './inicio.page.html', // Ruta al archivo HTML
  styleUrls: ['./inicio.page.scss'], // Estilos específicos para esta página
  standalone: true,
  imports: [
    IonItem,
    IonList,
    IonIcon,
    IonLabel,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCol,
    IonRow,
    IonCard,
    IonGrid,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // No se requiere lógica adicional en esta vista
  }

}