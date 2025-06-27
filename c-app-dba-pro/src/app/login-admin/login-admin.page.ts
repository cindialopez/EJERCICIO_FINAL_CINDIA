import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonText, IonLabel, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, 
    IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonText,
    CommonModule, FormsModule
  ]
})
export class LoginAdminPage {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.email === 'lopezcrespocindia@gmail.com' && this.password === '123456') {
      localStorage.setItem('admin', 'true');
      this.router.navigate(['/historial']);
    } else {
      this.error = 'Credenciales inválidas';
    }
  }
}
