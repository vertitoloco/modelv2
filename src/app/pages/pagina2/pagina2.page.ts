import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  nombre : String;
  apellidos : String;
  localidad :String;
  estudioscursados: String;
  email: String;
  contrasena: String;

  constructor() { }

  ngOnInit() {
  }

  
  submit() {
    if(this.nombre==null){
      alert("Rellene el campo nombre");
    }else if(this.apellidos==null){
      alert("Rellene el campo apellidos")
    }else if(this.localidad==null){
      alert("Rellene su localidad")
    }else if(this.estudioscursados==null){
      alert("Rellene sus estudios")
    }else if(this.email==null){
      alert("Rellene el campo Email")
    }else if(this.contrasena==null){
    alert("Rellene el campo Email")
    }else{
      alert("Formulario enviado");
      this.nombre="";
      this.apellidos="";
      this.localidad="";
      this.estudioscursados="";
      this.email="";
      this.contrasena="";
    }
  }
}
