import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
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
  mensajes: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const esAdmin = localStorage.getItem('admin');
    if (esAdmin !== 'true') {
      this.router.navigate(['/login-admin']);
      return;
    }

    this.http.get<any[]>('http://localhost:3000/api/contacto').subscribe({
      next: data => {
        console.log('✔️ Mensajes recibidos desde el backend:', data);
        this.mensajes = data;
      },
      error: error => console.error('❌ Error al cargar mensajes:', error)
    });
  }

  cerrarSesion() {
    localStorage.removeItem('admin');
    this.router.navigate(['/login-admin']);
  }
}
