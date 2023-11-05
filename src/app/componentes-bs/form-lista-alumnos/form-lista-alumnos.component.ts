import { Component } from '@angular/core';

@Component({
  selector: 'app-form-lista-alumnos',
  templateUrl: './form-lista-alumnos.component.html',
  styleUrls: ['./form-lista-alumnos.component.css']
})
export class FormListaAlumnosComponent {

  listaAlumnos = [
    {id: 1, nombre: "Luciana", apellido: "Mendoza Torres"},
    {id: 1, nombre: "Cesar", apellido: "Diaz Farfan"},
    {id: 1, nombre: "Gabriel", apellido: "Vega Balcazar"},
    {id: 1, nombre: "Marco", apellido: "Aranda"},
    {id: 1, nombre: "Maritza", apellido: "Gil"},
    {id: 1, nombre: "José", apellido: "Rubio"}
  ]

}
