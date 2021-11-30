import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }
  name:string = "Onur";
  surname:string='Alp';
  address:string ='Adress';



  users: Users[] = [
    {
      id: 1,
      name: "Onur",
      surname: "Alp",
      address: "888sk.",
      age: 14
    }
  ]


  keepData = this.users[0].name;
  test = this.users;

  ngOnInit(): void {
    console.log(this.keepData);

  }

  EventMessage(message:string):void{
    console.log(message);
  }
  EventFocus(message:string): void{
    console.log("Focused");
  }
  EventBlur(message:string): void{
    console.log("Out");
  }





  FullNameValue():void{
    console.log(this.name + ' - ' + this.surname);
    this.keepData = this.users[0].name;
  }



}
