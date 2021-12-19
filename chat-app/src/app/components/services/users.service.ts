import { Injectable } from '@angular/core';
import { Users } from '../mock/users';
import { USERS } from '../mock/mock-users';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /*getHeroes(): Hero[]{
    return HEROES;
  }*/
  getUsers(): Observable<Users[]> {
    const users  = of(USERS);
    return users;
  }

  constructor() { }
}
