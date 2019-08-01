import { AngularFireAuth } from '@angular/fire/auth';
import { AuthLoginService } from './../auth/authloginservice';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logado = null;

  constructor(
    public authloginservice: AuthLoginService,
    public route: Router

    ) { }

  ngOnInit() {
    this.logado = sessionStorage.getItem('user');
    console.log(this.logado)
  }
 

 

}
