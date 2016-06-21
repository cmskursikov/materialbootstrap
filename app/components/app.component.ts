import { Component } from '@angular/core';
import { Hero } from 'app/services/hero';
import { HeroDetailComponent } from 'app/components/hero/hero-detail.component';
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
	selector: 'my-app',
	directives: [HeroDetailComponent],
	templateUrl: 'app/templates/app-component.html',
	styleUrls: ['app/styles/hero.css']
})
export class AppComponent {
	public heroes: Hero[];
	public selectedHero: Hero;
	constructor() {
		this.heroes = HEROES;
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
}