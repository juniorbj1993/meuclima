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
    let vet  = JSON.parse(localStorage.getItem('buscas'));
    let x = 0;
    for(let cont of vet){
      if(cont.uid == sessionStorage.getItem('user')){
        this.dados = vet[x].arrayClima;

      }
      x = x+1
    }
  }
  

}
