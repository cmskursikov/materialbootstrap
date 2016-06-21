import { Component } from '@angular/core';
import { Hero } from 'app/services/hero';
import { HeroDetailComponent } from 'app/components/hero/hero-detail.component';
import { HeroListComponent } from 'app/components/hero/hero-list.component';
@Component({
	selector: 'my-app',
	directives: [HeroDetailComponent, HeroListComponent],
	templateUrl: 'app/templates/app-component.html',
})
export class AppComponent {
	public selectedHero: Hero;
	constructor() {	}
	onSelectHero(hero: Hero) {
		this.selectedHero = hero;
	}
}