import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../Store/cart.action';
import { WomenDataService } from '../common/services/women-data.service';


export interface WomenDataType {
  ethnics: [],
  WesternWear: []
}
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WomenComponent implements OnInit {
  data: any = {};

  constructor(private _httpService: HttpClient,
    private _store: Store,
    private _womenDataService: WomenDataService) { }

  ngOnInit(): void {
    /* this.getData(url).subscribe(
      res => console.log(res),
      err => console.log(err)
    ); */
    this.getWomenData();
  }

  getWomenData() {
    this._womenDataService.getWomenData().subscribe(
      (res) => {
        console.log('ethnic: ', res);
        this.data = res;
      },
      err => console.log('error fetching women data', err)
    );
  }

  addItemToCart() {
    this._store.dispatch(addToCart({item: 'womencloth'}));
  }

  removeItemFromCart() {
    this._store.dispatch(removeFromCart({item: 'removing last cart'}));
  }

}
