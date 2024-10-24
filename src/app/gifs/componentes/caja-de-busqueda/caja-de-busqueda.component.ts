import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-caja-de-busqueda',
  templateUrl: './caja-de-busqueda.component.html',
  styleUrl: './caja-de-busqueda.component.css'
})
export class CajaDeBusquedaComponent {

  @ViewChild('inputGif')
  public inputGif!: ElementRef;

  constructor(){}

  buscarGif(){
    this.inputGif.nativeElement.addEventListener('keyup', this.teclaPresionada.bind(this));
  }

  teclaPresionada(eventoTeclado: KeyboardEvent) {
    if (eventoTeclado.key === 'Enter') {
      console.log('Nombre Gif:', this.inputGif.nativeElement.value);
      // Aquí puedes agregar la lógica que necesites al presionar Enter

    }
  }
}
