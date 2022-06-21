import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";
import { first } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

@Component({
  selector: 'app-rxjs-examples',
  templateUrl: './rxjs-examples.component.html',
  styleUrls: ['./rxjs-examples.component.scss']
})
export class RxjsExamplesComponent implements OnInit {

  constructor() { }

  //newObj = null;
  /* firstData: any = "test-first";

  subject = new AsyncSubject();
*/



  ngOnInit(): void {

    ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      console.log(data);
    })


/*
    this.subject.subscribe(data => {
      console.log(`ObserverA ${data}`)
    })
    this.subject.subscribe(data => {
      console.log(`ObserverB ${data}`)
    })
    this.subject.next(3);
    this.subject.next(5);
    this.subject.subscribe(data => {
      console.log(`ObserverC ${data}`)
    })
    this.subject.next(7);
    this.subject.next("name");
    this.subject.complete();
*/
    /*this.newObj = new Observable<any>(data => {
      data.next(5);
      data.next(7);
      data.next(10);
      data.complete();
    });*/

    /*const observer = function (data: any){
      console.log(data);
    };*/

    /*const observer = (data: any) => {
      console.log(data);
    }*/
    /*this.newObj.subscribe(data =>{
      console.log(data);
    });*/

    //this.newObj.subscribe(observer);

    /*this.newObj.subscribe(data2 => {
      console.log(data2);
    })*/

  }

}
