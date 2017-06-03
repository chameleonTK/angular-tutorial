import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit{
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes()
        .then(heroes=> this.heroes = heroes, console.error);
    }
    
    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    constructor(
        private router: Router,
        private heroService: HeroService) { }

}
