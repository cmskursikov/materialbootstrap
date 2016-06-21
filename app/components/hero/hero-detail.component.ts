import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/templates/hero/hero-detail-component.html'
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}