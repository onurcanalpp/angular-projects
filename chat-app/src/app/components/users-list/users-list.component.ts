import { Component, OnInit } from '@angular/core';
import { Users } from '../mock/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Users[] = [];

  constructor(private UsersService: UsersService ) { }



  ngOnInit(): void {
    this.getUsers();
    console.log(this.users);
  }

  getUsers(): void {
    this.UsersService.getUsers().subscribe(users => this.users = users);
  }


}








