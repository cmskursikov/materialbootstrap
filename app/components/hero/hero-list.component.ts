import { Component, Output, EventEmitter } from '@angular/core';
import { Hero } from 'app/services/hero';
const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];
@Component({
	selector: 'hero-list',
	templateUrl: 'app/templates/hero/hero-list-component.html',
	styleUrls: ['app/styles/hero.css']
})
export class HeroListComponent {
	@Output()
	public onSelectHero = new EventEmitter<Hero>();
	public heroes: Hero[];
	constructor() {
		this.heroes = HEROES;
	}
	select(hero: Hero) {
		this.onSelectHero.emit(hero); 
	}
}