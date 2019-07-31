import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  dados;

  constructor(public route: Router) { }

  ngOnInit() {
    this.dados = JSON.parse(localStorage.getItem('buscas'));
  }
  deletar(){
    localStorage.setItem('buscas',null)
    window.alert('Dados Apagados!')
    this.route.navigate(['/home/pesquisa'])
    
  }

}
