import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [

    {path: 'home', redirectTo: '/home/pesquisa', pathMatch: 'full' },  
    {path: 'home', component: HomeComponent, children: [
        {path: 'pesquisa', component: PesquisaComponent},
        {path: 'lista', component: ListaComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
