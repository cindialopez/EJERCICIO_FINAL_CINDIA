// Elaborado por: Cindia López, Mayo 2025
// Ejercicio 1 - Sesión didáctica 1 - Programación 3
// Asesor: Prof. Carlos Márquez
// Descripción: Componente principal de la aplicación Ionic que define el menú de navegación y las rutas principales.
// Importación de módulos necesarios para el funcionamiento del componente
import { Component } from '@angular/core'; //Componente base de Angular que permite crear componentes personalizados
import { CommonModule } from '@angular/common'; // Módulo común para funcionalidades generales
import { RouterModule } from '@angular/router'; // Módulo para gestionar la navegación
import { addIcons } from 'ionicons'; // Método para agregar iconos personalizados
import { chatbubble } from 'ionicons/icons'; // Importación de iconos individuales
import { home, person, mail, folder } from 'ionicons/icons'; // Iconos usados en el menú

// Importación de componentes de Ionic para la interfaz gráfica
import { IonApp, IonRouterOutlet, IonMenu, IonMenuButton, IonIcon, IonItem, IonContent, IonTitle, IonToolbar, IonHeader, IonList, IonLabel, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root', // Nombre del selector para referenciar este componente en HTML
  templateUrl: 'app.component.html', // Archivo HTML donde se renderiza este componente
  imports: [
    IonButtons, IonLabel, CommonModule, RouterModule, IonMenu, IonMenuButton, 
    IonIcon, IonItem, IonList, IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet
  ], //  Lista de módulos y componentes importados que se usarán en este archivo
})
export class AppComponent {
  // Definición del menú de navegación con las páginas principales de la aplicación
  menuItems = [
    { title: 'Inicio', url: '/inicio', icon: 'home' }, // Página de inicio
    { title: 'Información Personal', url: '/perfil', icon: 'person' }, // Página del perfil
    { title: 'Contacto', url: '/contacto', icon: 'mail' }, // Página de contacto
    { title: 'Portafolio DBA', url: '/portafolio', icon: 'folder' } // Página del portafolio
  ];
 
  constructor() {
    // Configuración de los iconos que se usarán en la aplicación
    addIcons({
      home: home, // Icono para la página de Inicio
      person: person, // Icono para la página de Perfil
      mail: mail, // Icono para la página de Contacto
      folder: folder // Icono para la página de Portafolio
    });

    console.log('AppComponent inicializado'); // Mensaje en consola para verificar que el componente se inicializó
  }
}
