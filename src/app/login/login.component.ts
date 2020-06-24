import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(event: any, dataForm: any) {
    this.authService.login(dataForm.username, dataForm.password);
    if (this.authService.isAuthenticated) {
      this.authService.saveAuthenticatedUser();

    }
    else alert('authentication impossible !');
  }
}
