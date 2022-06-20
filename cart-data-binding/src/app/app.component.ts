import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards = [
    {
        id: '1',
        title: 'Mountain bike',
        imageUrl: 'assets/biking.jpeg',
        username:'onurcanalpp',
        content: 'Lorem Ipsum Test Content'
    },
    {
        id: '2',
        title: 'Climb',
        imageUrl: 'assets/mountain.jpeg',
        username:'onurcanalpp',
        content: 'Lorem Ipsum Test Content'
    },
    {
        id: '3',
        title: 'Hiking',
        imageUrl: 'assets/tree.jpeg',
        username:'onurcanalpp',
        content: 'Lorem Ipsum Test Content'
    },

  ]
}
