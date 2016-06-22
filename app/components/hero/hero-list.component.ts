import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { Hero } from './../../services/hero';
import { HeroService } from './../../services/hero.service';

@Component({
	selector: 'hero-list',
	providers: [HeroService],
	templateUrl: 'app/templates/hero/hero-list-component.html',
	styleUrls: ['app/styles/hero.css']
})
export class HeroListComponent implements OnInit {
	@Output()
	public onSelectHero = new EventEmitter<Hero>();
	public heroes: Hero[];
	constructor(private heroService: HeroService) { }
	getHeroes() {
		this.heroes = this.heroService.getHeroes();
	}
	ngOnInit() {
		this.getHeroes();
	}
	select(hero: Hero) {
		this.onSelectHero.emit(hero); 
	}
}