import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0;
  mensaje = '';
  entrada: string = "";
  numero1: number = 0;
  numero2: number = 0;
  palindromo: string = "";
  textoMedido: string = "";
  guiones = "";
  dameMensaje() {
    return `${this.mensaje}  ${this.count}`;
  }
  resultado() {
    return Number(this.numero1) + Number(this.numero2);
  }
  palindromoreverse() {
    return this.palindromo.split("").reverse().join("");
  }
  medirTexto() {
    let longitud = this.textoMedido.length;
    this.guiones = "";
    for (let i = 0; i < longitud; i++) {
      this.guiones += "-";
    }
    return longitud;
  }
}
