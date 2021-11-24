import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public parentCount:number=0;

  addUser(){
    this.parentCount += 1;
  }
  removeUser(){
    if(this.parentCount > 0){
      this.parentCount -= 1;
    }
  }

  addPersonal(name:string):void{
    console.log("Parent: Add Personel", name);
  }
}


