import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListaComponent } from './lista/lista.component';
import { HomeRoutingModule } from './home.routing';

import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    PesquisaComponent,
    ListaComponent,
 
],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
 
})
export class HomeModule { }
