import { Component, OnInit  } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Hero } from './../../services/hero';
import { HeroService } from './../../services/hero.service';
@Component({
	selector: 'hero-detail',
	templateUrl: 'app/templates/hero/hero-detail-component.html',
	styleUrls: ['app/styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;
	constructor(private heroService: HeroService, private routeParams: RouteParams) { }
	ngOnInit() {
		let id = +this.routeParams.get('id');
		this.hero = this.heroService.getHero(id);
	}
	goBack() {
		window.history.back();
	}
}