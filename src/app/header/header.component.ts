import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count = this._store.select('cartCount');

  @Input() isUserLoggedIn : boolean = false;

  constructor(private _store: Store<{cartCount: number}>) { }

  ngOnInit(): void {
  }

}
