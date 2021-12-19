import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from '../mock/users';
import { USERS } from '../mock/mock-users';




@Injectable({
  providedIn: 'root'
})
export class UsersService {


  getUsers(): Observable<Users[]> {
    var users  = of(USERS);
    return users;
  }


  constructor() { }
}
