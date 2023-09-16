import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _isLoggedInSource = new Subject<boolean>();
  isLoggedIn$ = this._isLoggedInSource.asObservable();

  constructor() { }

  setLoggedIn(isLoggedIn: boolean) {
    this._isLoggedInSource.next(isLoggedIn);
  }
}
