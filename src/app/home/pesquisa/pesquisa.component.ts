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
      console.log(res)
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
    if(localStorage.getItem('buscas') == null){
      this.pesquisa.push(this.clima);
      localStorage.setItem('buscas', JSON.stringify(this.pesquisa));
      this.salvo = true;
      window.alert('Dados Salvos!')
    }else{
      this.pesquisa =  JSON.parse(localStorage.getItem('buscas'));
      this.pesquisa.push(this.clima);
      localStorage.setItem('buscas', JSON.stringify(this.pesquisa));
      let teste = JSON.parse(localStorage.getItem('buscas'));
      console.log(teste)
      this.salvo = true;
      window.alert('Dados Salvos!')
    }

    // 
    //
    
  }
  salvar(){
    this.clima.graus = this.graus;
    this.clima.cidade = this.cidadeName;
    this.clima.icone = this.url;
    this.clima.desc = this.descricao;
    this.clima.aval = this.avaliacao;
    if(localStorage.getItem('buscas') == 'null'){
      this.pesquisa.push(this.clima);
      localStorage.setItem('buscas', JSON.stringify(this.pesquisa));
      this.salvo = true;
      window.alert('Dados Salvos!')
    }else{
      this.pesquisa =  JSON.parse(localStorage.getItem('buscas'));
      this.pesquisa.push(this.clima);
      localStorage.setItem('buscas', JSON.stringify(this.pesquisa));
      let teste =JSON.parse(localStorage.getItem('buscas'));
      console.log(teste)
      this.salvo = true;
      window.alert('Dados Salvos!')
    }
  }


}
