// Elaborado por: Cindia López, Junio 2025
// Ejercicio 2. Sesión Didáctica 2 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo TypeScript del componente HistorialPage
// Este archivo contiene la lógica para consultar y mostrar los mensajes enviados desde el formulario de contacto.
// También incluye una verificación de autenticación para proteger el acceso a esta vista.

// Fase II: Este módulo fue creado en la segunda fase del proyecto. Implementé esta lógica para que el administrador pueda visualizar los mensajes almacenados en MongoDB Atlas. Protegí la ruta mediante una verificación con localStorage y añadí una función para cerrar sesión.

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Importación de componentes de Ionic necesarios para la interfaz
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-historial', // Selector del componente
  templateUrl: './historial.page.html', // Ruta al archivo HTML
  styleUrls: ['./historial.page.scss'], // Estilos específicos (no utilizados en este caso)
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    IonTitle,
    IonToolbar
  ]
})
export class HistorialPage implements OnInit {
  // Arreglo que almacenará los mensajes recibidos desde el backend
  mensajes: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Verifico si el usuario está autenticado como administrador
    const esAdmin = localStorage.getItem('admin');
    if (esAdmin !== 'true') {
      // Si no está autenticado, lo redirijo al login
      this.router.navigate(['/login-admin']);
      return;
    }

    // Si está autenticado, realizo una petición GET al backend para obtener los mensajes
    this.http.get<any[]>('http://localhost:3000/api/contacto').subscribe({
      next: data => {
        console.log('✔️ Mensajes recibidos desde el backend:', data);
        this.mensajes = data; // Asigno los datos al arreglo para mostrarlos en la vista
      },
      error: error => console.error('❌ Error al cargar mensajes:', error)
    });
  }

  // Función para cerrar sesión: elimina la clave del localStorage y redirige al login
  cerrarSesion() {
    localStorage.removeItem('admin');
    this.router.navigate(['/login-admin']);
  }
}