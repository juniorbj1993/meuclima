import { AuthLoginService } from './../auth/authloginservice';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(
    public router: Router,
    public afAuth: AuthLoginService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('user') == null){
      this.router.navigate(['']);
    }
    this.username = localStorage.getItem('username');
  }
  sair(){
    this.afAuth.SignOut();
    
  }
  esconderMenu(){
    console.log(document.getElementById('sidebar').className)
    if(document.getElementById('sidebar').className == 'active'){
      document.getElementById('sidebar').className = 'desactive';
    }else{
      document.getElementById('sidebar').className = 'active';
    }
    
  }
}
