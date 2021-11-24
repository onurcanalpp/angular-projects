import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Output() PersonalEvent = new EventEmitter<string> ();

  constructor() { }

  @Input() count:number = 0;

  ngOnInit(): void {
  }

  addPersonal(name:string):void{
    this.PersonalEvent.emit(name);
  }

}
