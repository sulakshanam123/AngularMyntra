import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  // observable created using observable constructor
  myObservable1 = new Observable((observer) => {
    setTimeout(() => { observer.next('1'); }, 1000);
    setTimeout(() => { observer.next('2'); }, 2000);
    setTimeout(() => { observer.complete(); }, 4000);
    setTimeout(() => { observer.error('something went wrong'); }, 3000);
    setTimeout(() => { observer.next('3'); }, 3000);
  });


  // observable creation using observable create method

  myObservable2 = Observable.create((observer: any) => {
    setTimeout(() => { observer.next('1'); }, 1000);
    setTimeout(() => { observer.next('2'); }, 2000);
    setTimeout(() => { observer.complete(); }, 5000);
    // setTimeout(() => { observer.error('something went wrong'); }, 3000);
    setTimeout(() => { observer.next('3'); }, 3000);
  })

  // Observable creation using 'of' operator
  // of operator takes any no of arguments, and 
  // emits whole of the array and rest of the parameters at once
  // also invokes complete notification block internally;
  array1 = [1, 2, 'A'];
  myObservable3 = of(this.array1, [90, 12, 3], 'hello', true);


  // observable creation using from operator
  // of operator takes only one argument of iterable type, and 
  // emits values of iterable arguemnt one by one
  // also invokes complete notification block internally;
  myObservable = from(this.array1);

  constructor() { }

  ngOnInit(): void {
    // after error even complete is not called
    // after complete error is also not called
    this.myObservable.subscribe(
      (val: any) => {
        console.log(val);
      },
      (err: any) => {
        alert('recieved Err ' + err);
      },
      () => {
        alert('complete notification');
      }
    )
    this.myObservable = of('hhii copyyy'); // this will not get called on same observable 'myObservable'
    // as complete is called for previous observable creation using 'of'.
  }

}
