import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-DAMPage',
  templateUrl: './DAM.page.html',
  styleUrls: ['./DAM.page.scss'],
})
export class DAMPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  async basedatos() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Base de datos',
      duration: 2000,
    });
    toast.present();
  }
  
  async programacion() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Programacion',
      duration: 2000,
    });
    toast.present();
  }
  
  async sistemas() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Sistemas Informáticos',
      duration: 2000,
    });
    toast.present();
  }
  async entornos() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Entornos de desarrollo',
      duration: 2000,
    });
    toast.present();
  }
  async lenguaje() {
    const toast = await this.toastController.create({
      message: 'Ha elegido Lenguaje de Marcas',
      duration: 2000,
    });
    toast.present();
  } 
}
