import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class DAM2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  asignatura = [
    {nombre: "Acceso a datos", icono:"cloud-upload-outline", color: "primary"},
    {nombre: "Móviles", icono:"keypad-outline", color: "primary"},
    {nombre: "Sistemas de gestión empresarial", icono:"calculator-outline", color: "dark"},
    {nombre: "Interfaces", icono:"code-outline", color: "light"},
    {nombre: "Procesos", icono:"logo-html5", color: "primary"},
  ]
}
