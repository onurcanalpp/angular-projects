import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  /*getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }*/
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.MessageService.add(`Heroes Component: Selected hero id = ${hero.id} - Hero Name is ${hero.name} selected`);
    console.log(this.selectedHero);
  }







  constructor(
    private heroService: HeroService,
    public MessageService: MessageService,
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
