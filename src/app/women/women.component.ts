import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../Store/cart.action';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  constructor(private _httpService: HttpClient,
    private _store: Store) { }

  ngOnInit(): void {
    const url = '/assets/data/women.json';
    this.getData(url).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  getData (url: any) {
    return this._httpService.get(url).pipe(
      map(val => {
        console.log('inside map');
        return val;
      }),
      catchError((err: any) => {
        console.log('in throw err');
        return throwError(err);
      })
    );
  }

  addItemToCart() {
    this._store.dispatch(addToCart());
  }

  removeItemFromCart() {
    this._store.dispatch(removeFromCart());
  }

}
