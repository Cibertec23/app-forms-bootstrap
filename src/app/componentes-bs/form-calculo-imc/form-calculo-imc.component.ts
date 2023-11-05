import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calculo-imc',
  templateUrl: './form-calculo-imc.component.html',
  styleUrls: ['./form-calculo-imc.component.css']
})
export class FormCalculoImcComponent {

  objImc = {
    nombre: null,
    peso: null, 
    talla: null,
    resultado: 0
  }
  mostrarResultado = false;
  listaPacientes: Paciente = [];

  calcularImc(){
    let tallam = Number(this.objImc.talla) / 100;
    let peso = Number(this.objImc.peso);
    this.objImc.resultado = tallam / (peso * peso);
    this.listaPacientes.push({
      id: 1, nombre: String(this.objImc.nombre), imc: this.objImc.resultado
    });
    this.mostrarResultado =true;
  }

}

type Paciente = Array<{id: number, nombre: string, imc: number }>
