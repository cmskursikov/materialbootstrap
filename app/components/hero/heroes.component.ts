import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './../../services/hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
@Component({
	selector: 'heroes',
	directives: [HeroDetailComponent, HeroListComponent],
	templateUrl: 'app/templates/hero/hero-component.html',
})
export class HeroesComponent  {
	public selectedHero: Hero;
	constructor(private router: Router) {	}
	onSelectHero(hero: Hero) {
		this.selectedHero = hero;
	}
	gotoDetail() {
		this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}