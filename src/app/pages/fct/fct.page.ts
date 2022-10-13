import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fct',
  templateUrl: './fct.page.html',
  styleUrls: ['./fct.page.scss'],
})
export class FCTPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [
    {nombre: "Item 0"},
    {nombre: "Item 1"},
    {nombre: "Item 2"},
    {nombre: "Item 3"},
    {nombre: "Item 4"},
    {nombre: "Item 5"},
    {nombre: "Item 6"},
    {nombre: "Item 7"},
    {nombre: "Item 8"},
    {nombre: "Item 9"},
    {nombre: "Item 10"},
    {nombre: "Item 11"},
    {nombre: "Item 12"},
    {nombre: "Item 13"},
    {nombre: "Item 14"},
    {nombre: "Item 15"},
  ]
}
