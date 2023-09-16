import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app.state';
import { selectCart, selectCartCount } from '../Store/store.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count: any;

  @Input() isUserLoggedIn : boolean = false;
  cart: any = [];

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.select(selectCart).subscribe(res => {
      if (res) {
        this.cart = res.cart;
      }
    });
    this.count = this._store.select(selectCartCount);
  }

}
