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
  IonText, IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto', // Nombre que identifica el componente en el HTML
  templateUrl: './contacto.page.html', // Ruta al archivo de plantilla
  styleUrls: ['./contacto.page.scss'], // Hoja de estilos específica para esta página
  standalone: true, // Indica que este componente funciona sin necesidad de un NgModule
  imports: [IonSpinner,  // Se importa todo lo necesario para que el HTML funcione bien
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
  formData = {
    nombre: '',
    email: '',
    telefono: '', // Lo puedes añadir si ya usas el campo de teléfono
    mensaje: ''
  };

  // Variable que mostrará posibles errores de validación o envío
  error: any;
  cargando: boolean = false; // indica si se está enviando
  enviado: boolean = false;  // muestra mensaje de éxito

  // Inyección del servicio HttpClient para hacer peticiones al backend
  constructor(private http: HttpClient) {}

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    // Se crea una copia del objeto con los datos actuales del formulario
    const datos = { ...this.formData };

    // Petición POST al servidor para guardar el mensaje
    this.http.post('http://localhost:3000/api/contacto', datos).subscribe({
      next: res => {
        console.log('✅ Enviado:', res); // Confirmación por consola
        alert('¡Gracias por contactarnos! Pronto te responderemos'); // Alerta para el usuario
        // Se limpian los campos del formulario después del envío
        this.formData = { nombre: '', email: '', telefono: '', mensaje: '' };
      },
      error: err => {
        console.error('❌ Error al enviar:', err); // Log de error por consola
        alert('Ocurrió un error al enviar el mensaje'); // Alerta de error
      }
    });
  }
}
