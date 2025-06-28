// Elaborado por: Cindia López, Junio 2025
// Ejercicio 2. Sesión Didáctica 2 - Programación 3
// Asesor: Prof. Carlos Márquez

// Archivo TypeScript del componente LoginAdminPage
// Este archivo contiene la lógica del formulario de acceso para el administrador.
// Implementé una validación simple de credenciales y el uso de localStorage para proteger el acceso al historial de mensajes.

// Fase II: Este módulo fue creado en la segunda fase del proyecto. Su propósito es restringir el acceso a la vista de historial únicamente a usuarios autorizados. Si las credenciales son correctas, se guarda una clave en el almacenamiento local y se redirige al historial. En caso contrario, se muestra un mensaje de error.

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importación de componentes de Ionic utilizados en el formulario
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonText,
  IonLabel,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-admin', // Selector del componente
  templateUrl: './login-admin.page.html', // Ruta al archivo HTML
  styleUrls: ['./login-admin.page.scss'], // Estilos específicos (no utilizados en este caso)
  standalone: true,
  imports: [
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonText,
    CommonModule,
    FormsModule
  ]
})
export class LoginAdminPage {
  // Variables para capturar los datos del formulario
  email: string = '';
  password: string = '';
  error: string = ''; // Mensaje de error si las credenciales son incorrectas

  constructor(private router: Router) {}

  // Función que se ejecuta al hacer clic en "Ingresar"
  ingresar() {
    // Verifico si las credenciales coinciden con las predefinidas
    if (this.email === 'lopezcrespocindia@gmail.com' && this.password === '123456') {
      // Si son válidas, guardo una clave en localStorage para autenticar al usuario
      localStorage.setItem('admin', 'true');
      // Redirijo al historial de mensajes
      this.router.navigate(['/historial']);
    } else {
      // Si son incorrectas, muestro un mensaje de error
      this.error = 'Credenciales inválidas';
    }
  }
}
