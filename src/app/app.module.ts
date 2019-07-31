import { HomeModule } from './home/home.module';
import { AuthLoginService } from './auth/authloginservice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//crud firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//serviços
import { environment } from './../app/environments/environments';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import {requisicaohttp} from './shared/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    AuthLoginService,
    requisicaohttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
