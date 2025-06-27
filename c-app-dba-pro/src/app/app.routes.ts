// Elaborado por: Cindia López, Mayo 2025
// Ejercicio 1 - Sesión didáctica 1 - Programación 3
// Asesor: Prof. Carlos Márquez
// Descripción: Este código importa el módulo de rutas necesarias para la aplicación Ionic y define las rutas principales que se utilizarán en la navegación de la aplicación.

// Importación del módulo de rutas de Angular
import { Routes } from '@angular/router';

// Configuración de las rutas principales de la aplicación
export const routes: Routes = [
  // Redirecciona la raíz ('/') a la página 'inicio'
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Ruta para la página de Inicio - Se carga de manera dinámica con 'loadComponent'
  { path: 'inicio', loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage) },

  // Ruta para la página de Perfil
  { path: 'perfil', loadComponent: () => import('./perfil/perfil.page').then(m => m.PerfilPage) },

  // Ruta para la página de Portafolio
  { path: 'portafolio', loadComponent: () => import('./portafolio/portafolio.page').then(m => m.PortafolioPage) },

  // Ruta para la página de Contacto
  { path: 'contacto', loadComponent: () => import('./contacto/contacto.page').then(m => m.ContactoPage) },
  {
    path: 'login-admin',
    loadComponent: () => import('./login-admin/login-admin.page').then( m => m.LoginAdminPage)
  },
  {
    path: 'historial',
    loadComponent: () => import('./historial/historial.page').then( m => m.HistorialPage)
  },
];
