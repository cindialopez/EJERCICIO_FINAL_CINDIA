// Elaborado por: Cindia López, Mayo 2025
// Ejercicio 1. Sesión Didáctica 1 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo TypeScript del componente PortafolioPage
// Este archivo forma parte de la Fase I del proyecto. Define la estructura base de la página de portafolio.
// Por el momento, no contiene lógica funcional, ya que la sección se encuentra en construcción.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importación de componentes de Ionic utilizados en la vista de portafolio
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-portafolio', // Selector del componente
  templateUrl: './portafolio.page.html', // Ruta al archivo HTML
  styleUrls: ['./portafolio.page.scss'], // Estilos específicos para esta página
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class PortafolioPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // No se requiere lógica en esta vista por ahora
  }

}
