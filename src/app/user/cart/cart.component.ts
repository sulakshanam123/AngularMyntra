import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  count = this._store.select('cartCount');
  constructor(private _store: Store<{cartCount: number}>) { }

  ngOnInit(): void {
  }

}
