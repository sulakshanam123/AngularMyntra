import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private _router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
     if (this.username === window.localStorage.getItem('username')) {
      if (this.password === window.localStorage.getItem('password')) {
        console.log('logged in successfully');
        // set loggedIn flag in local storage
        window.localStorage.setItem('isLoggedIn', 'true');
        // set loggedIn flag in service
        this._loginService.setLoggedIn(true);
        // route to home page
        this._router.navigateByUrl('home');
      }
    }
  }

}
