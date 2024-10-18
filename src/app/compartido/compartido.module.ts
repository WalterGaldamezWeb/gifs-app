import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';



@NgModule({
  declarations: [
    BarraLateralComponent,
    PieDePaginaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraLateralComponent,
    PieDePaginaComponent
  ]
})
export class CompartidoModule { }
