import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { PaginaInicioComponent } from './paginas/pagina-inicio/pagina-inicio.component';
import { CajaDeBusquedaComponent } from './componentes/caja-de-busqueda/caja-de-busqueda.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    CajaDeBusquedaComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    CompartidoModule
  ],
  exports:[
    PaginaInicioComponent
  ]
})
export class GifsModule { }
