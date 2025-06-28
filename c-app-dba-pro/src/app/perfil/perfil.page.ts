// Elaborado por: Cindia López, Mayo 2025
// Ejercicio 1. Sesión Didáctica 1 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo TypeScript del componente PerfilPage
// Este archivo forma parte de la Fase I del proyecto. Define la estructura base de la página de perfil personal.
// No se requiere lógica adicional, ya que todo el contenido mostrado es estático y se gestiona desde el archivo HTML.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importación de componentes de Ionic utilizados en la vista de perfil
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonIcon,
  IonItem,
  IonLabel,
  IonChip,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil', // Selector del componente
  templateUrl: './perfil.page.html', // Ruta al archivo HTML
  styleUrls: ['./perfil.page.scss'], // Estilos específicos para esta página
  standalone: true,
  imports: [
    IonButton,
    IonChip,
    IonLabel,
    IonItem,
    IonIcon,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // No se requiere lógica en esta vista
  }

}
