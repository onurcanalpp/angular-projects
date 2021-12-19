import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../mock/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input ()  user: Users;



  ngOnInit(): void {
    console.log(this.user);
}

}
