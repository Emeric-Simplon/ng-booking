import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './login/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
    title = 'booking';
    responseCat;
    currentCategorie;
    isLogged:boolean;

    constructor(private modalService: NgbModal,private router:Router,
    private authService:AuthenticationService){
    }

    ngOnInit(){
      if(localStorage.getItem("authUser")){
        this.isLogged = true;
      }else{
        this.isLogged = false
      }
        this.authService.loadAuthenticatedUserFromLocalStorage();
    }

    Logout(){
      localStorage.clear();
      this.isLogged = false;
    }
    openLogin(){
     this.modalService.open(LoginComponent);
     }

}
