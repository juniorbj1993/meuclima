import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  dados;

  constructor() { }

  ngOnInit() {
    this.dados = JSON.parse(localStorage.getItem('buscas'));
  }
  deletar(){
    localStorage.clear()
  }

}
