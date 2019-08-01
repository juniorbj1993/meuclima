import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home.component';
import {AuthGuardService as AuthGuard} from '../guards/auth-guard.service';

const homeRoutes: Routes = [

    {path: 'home', redirectTo: '/home/pesquisa', pathMatch: 'full', canActivate: [AuthGuard] },  
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
        {path: 'pesquisa', component: PesquisaComponent},
        {path: 'lista', component: ListaComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
