import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonGrid, IonCard, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonIcon, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonIcon, IonLabel, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonCard, IonGrid, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
