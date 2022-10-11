import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-DAMPage',
  templateUrl: './DAM.page.html',
  styleUrls: ['./DAM.page.scss'],
})
export class DAMPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  asignatura = [
    {nombre: "Base de datos", icono:"cloud-upload-outline", color: "primary"},
    {nombre: "Programación", icono:"keypad-outline", color: "primary"},
    {nombre: "Sistemas informáticos", icono:"calculator-outline", color: "dark"},
    {nombre: "Entornos de desarrollo", icono:"code-outline", color: "light"},
    {nombre: "Lenguaje de marcas", icono:"logo-html5", color: "primary"},
  ]

}
