import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './common/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    window.localStorage.setItem('username', 'sulu');
    window.localStorage.setItem('password', 'password');
    this._loginService.isLoggedIn$
    .subscribe(
      status => {
        this.isUserLoggedIn = status;
        alert(status);
      }
    );
  }

}
