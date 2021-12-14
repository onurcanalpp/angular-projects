import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  /*getHeroes(): Hero[]{
    return HEROES;
  }*/
  getHeroes(): Observable<Hero[]> {
    const heroes  =of(HEROES);
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.MessageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private MessageService: MessageService) { }
}
