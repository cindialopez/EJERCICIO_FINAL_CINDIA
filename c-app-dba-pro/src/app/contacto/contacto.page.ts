// Elaborado por: Cindia López, Junio 2025
// Ejercicio 2. Sesión Didáctica 2 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo TypeScript del componente ContactoPage
// Este archivo contiene la lógica del formulario de contacto, incluyendo validaciones, conexión con el backend y retroalimentación visual.

// Fase I: En esta etapa solo se definía la estructura del componente, sin lógica funcional ni conexión externa.

// Fase II: En esta fase implementé la lógica completa del formulario. Agregué un objeto para almacenar los datos ingresados, variables de estado para controlar la interfaz, y una función que realiza una petición POST al backend para guardar el mensaje en MongoDB Atlas.

import { Component } from '@angular/core';

// Módulos necesarios para plantillas, formularios y peticiones HTTP
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Importación de los componentes de Ionic que se usan en el formulario
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonText,
  IonSpinner
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto', // Nombre que identifica el componente en el HTML
  templateUrl: './contacto.page.html', // Ruta al archivo de plantilla
  styleUrls: ['./contacto.page.scss'], // Hoja de estilos específica para esta página
  standalone: true, // Indica que este componente funciona sin necesidad de un NgModule
  imports: [
    IonSpinner,
    IonText,
    IonLabel,
    IonItem,
    IonIcon,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonTextarea,
    IonButton,
    IonInput,
    HttpClientModule
  ]
})
export class ContactoPage {
  // Objeto que guarda temporalmente los datos del formulario
  // Utilizo binding bidireccional [(ngModel)] en el HTML para mantener sincronizados los datos
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  // Variables de estado para controlar la interfaz
  error: any; // Muestra errores de envío
  cargando: boolean = false; // Indica si se está enviando el formulario
  enviado: boolean = false;  // Muestra mensaje de éxito tras el envío

  // Inyecto el servicio HttpClient para poder hacer peticiones HTTP al backend
  constructor(private http: HttpClient) {}

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    // Activo el estado de carga
    this.cargando = true;
    this.enviado = false;
    this.error = null;

    // Creo una copia del objeto con los datos actuales del formulario
    const datos = { ...this.formData };

    // Realizo una petición POST al backend (ruta: /api/contacto)
    this.http.post('http://localhost:3000/api/contacto', datos).subscribe({
      next: res => {
        console.log('✅ Enviado:', res); // Confirmación por consola
        alert('¡Gracias por contactarnos! Pronto te responderemos'); // Alerta para el usuario

        // Limpio los campos del formulario después del envío
        this.formData = { nombre: '', email: '', telefono: '', mensaje: '' };

        // Actualizo los estados visuales
        this.enviado = true;
        this.cargando = false;
      },
      error: err => {
        console.error('❌ Error al enviar:', err); // Log de error por consola
        alert('Ocurrió un error al enviar el mensaje'); // Alerta de error
        this.error = 'No se pudo enviar el mensaje. Intenta nuevamente.';
        this.cargando = false;
      }
    });
  }
}