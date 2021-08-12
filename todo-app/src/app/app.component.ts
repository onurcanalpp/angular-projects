import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  
  products = [
    {
      id: '1',
      name: "Onur",
    },
    {
        id: '2',
        name: 'John',
    },
    {
        id: '3',
        name: 'Chris',
    }
  ]
}
