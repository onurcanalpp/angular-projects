import { Component, OnInit } from '@angular/core';
import { Users } from '../mock/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  users: Users[] = [];

  constructor(private UsersService: UsersService ) { }

  ngOnInit(): void {
    console.log(this.getUsers());
  }

  getUsers(): void {
    this.UsersService.getUsers().subscribe(users => this.users = users);
  }

}
