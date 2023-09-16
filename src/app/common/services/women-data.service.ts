import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { WomenDataType } from 'src/app/women/women.component';

@Injectable({
  providedIn: 'root'
})
export class WomenDataService {

  url = '/assets/data/women.json';

  constructor(private _httpService: HttpClient) { }
  
  getWomenData() : Observable<WomenDataType> {
    return this._httpService.get<WomenDataType>(this.url).pipe(
      delay(2000),
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
}
