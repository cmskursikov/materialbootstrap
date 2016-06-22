import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './../../services/hero';
import { HeroService } from './../../services/hero.service';

@Component({
	selector: 'dashboard',
	templateUrl: 'app/templates/hero/dashboard-component.html',
	styleUrls: ['app/styles/hero-dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(private router: Router, private heroService: HeroService) { }
	ngOnInit() {
		this.heroes = this.heroService.getHeroes().slice(1, 5);
	}
	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this.router.navigate(link);
	}
}