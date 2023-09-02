import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  searchValue: any;

  

  myfun () {

    const data = [
      {
        status: 'active',
        age: 13
      },
      {
        status: 'inactive',
        age: 23
      },
      {
        status: 'active',
        age: 19
      },
      {
        status: 'active',
        age: 10
      },
      {
        status: 'inactive',
        age: 60
      },
      {
        status: 'active',
        age: 20
      },
      {
        status: 'iactive',
        age: 13
      },
      {
        status: 'active',
        age: 43
      },
    ]
    const observable  = new Observable((subscriber) => {
      subscriber.next(data);
    })
    const observer = {
      next: (value: any) => { console.log(value) },
      error: (err: any) => { console.log(err) },
      complete: () => { console.log('complete') },
    }

    observable.subscribe(observer);
  }
}
