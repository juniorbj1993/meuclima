import { Component, OnInit } from '@angular/core';
import {requisicaohttp} from '../../shared/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  buscaform: FormGroup;
  cidadeName: string = '';
  key = 'a796659d888cfaef31fcc9feeda440d6';
  icon: string = "";
  url: string = "";
  descricao: string;
  graus: any = null;
  

  avaliacao: string;

  salvo: boolean = true;

  DadosUser = {
    uid:'',
    arrayClima: []
  }

  clima = {
    cidade: '',
    icone: '',
    aval: '',
    desc: '',
    graus: ''
  }

  pesquisa: Array<object> = []



  constructor(
    private http: requisicaohttp,
    public formbuilder: FormBuilder,
  ) {
    this.buscaform = this.formbuilder.group({
      cidade: [null,[Validators.required]]
    })
   }

  ngOnInit() {
  }
  click(){
    this.http.getData(this.buscaform.get('cidade').value,this.key).subscribe((res:any) =>{
      this.salvo = false;
      this.avaliacao = '1';
      this.graus = res.main.temp;
      this.cidadeName = this.buscaform.get('cidade').value;
      this.icon = res.weather[0].icon;
      this.descricao = res.weather[0].description;
      this.url = `http://openweathermap.org/img/w/${this.icon}.png`
    },
    error=>{
      window.alert('Cidade não encontrada ou escrita de forma errada!')
    })
  }
  aval(numb: string){
    this.avaliacao = numb;
    this.clima.graus = this.graus;
    this.clima.cidade = this.cidadeName;
    this.clima.icone = this.url;
    this.clima.desc = this.descricao;
    this.clima.aval = numb;
    
    if(!localStorage.getItem('buscas')){
      this.DadosUser.uid = sessionStorage.getItem('user');
      this.DadosUser.arrayClima.push(this.clima)
      this.pesquisa.push(this.DadosUser)

      
      localStorage.setItem('buscas', JSON.stringify(this.pesquisa));
      this.salvo = true;
    
      window.alert('Dados Salvos!')
    }else{
      let vetAux = JSON.parse(localStorage.getItem('buscas'));
      let x = 0;
      let dadouiexist = false;

      for(let cont of vetAux ){
        if(cont.uid == sessionStorage.getItem('user')){
          vetAux[x].arrayClima.push(this.clima);
          localStorage.setItem('buscas', JSON.stringify(vetAux));
          
          this.salvo = true;
          dadouiexist = true;
          window.alert('Dados Salvos!')
        }
        x = x + 1;
      }
      if(dadouiexist == false){
        this.DadosUser.uid = sessionStorage.getItem('user');
        this.DadosUser.arrayClima.push(this.clima)
        vetAux.push(this.DadosUser)
  

        localStorage.setItem('buscas', JSON.stringify(vetAux));
        this.salvo = true;
        window.alert('Dados Salvos!')

      }

    
    }


    
  }
  salvar(){
    this.clima.graus = this.graus;
    this.clima.cidade = this.cidadeName;
    this.clima.icone = this.url;
    this.clima.desc = this.descricao;
    this.clima.aval = this.avaliacao;

    if(!localStorage.getItem('buscas')){
      this.DadosUser.uid = sessionStorage.getItem('user');
      this.DadosUser.arrayClima.push(this.clima)
      this.pesquisa.push(this.DadosUser)

      localStorage.setItem('buscas', JSON.stringify(this.pesquisa));
      this.salvo = true;

      window.alert('Dados Salvos!')
    }else{
      let vetAux = JSON.parse(localStorage.getItem('buscas'));
      let x = 0;
      let dadouiexist = false;

      for(let cont of vetAux ){
        if(cont.uid == sessionStorage.getItem('user')){
          vetAux[x].arrayClima.push(this.clima);
          localStorage.setItem('buscas', JSON.stringify(vetAux));

          this.salvo = true;
          dadouiexist = true;
           window.alert('Dados Salvos!')
        }
        x = x + 1;
      }
      if(dadouiexist == false){
        this.DadosUser.uid = sessionStorage.getItem('user');
        this.DadosUser.arrayClima.push(this.clima)
        vetAux.push(this.DadosUser)
 
        localStorage.setItem('buscas', JSON.stringify(vetAux));
        this.salvo = true;

        window.alert('Dados Salvos!')

      }

    }

  }


}
