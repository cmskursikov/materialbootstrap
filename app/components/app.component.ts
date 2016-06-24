import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService } from './../services/hero.service';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { DashboardComponent } from './hero/dashboard.component';
import { AuthComponent } from './cafepulse/auth.component';
import { AddEmployeeComponent } from './cafepulse/add-employee.component';
import { ProfileComponent } from './cafepulse/profile.component';
import { OpenCloseSessionComponent } from './cafepulse/open-close-session.component';
import { CashboxComponent } from './cafepulse/cashbox.component';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES, HeroesComponent, HeroDetailComponent, DashboardComponent],
	providers: [ROUTER_PROVIDERS, HeroService],
	templateUrl: 'app/templates/app-component.html',
})
@RouteConfig([{
	  path: '/dashboard',
	  name: 'Dashboard',
	  component: DashboardComponent,
	  useAsDefault: true
	}, {
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}, {
		path: '/heroes/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}, {
		path: '/Auth',
		name: 'Auth',
		component: AuthComponent
	}, {
		path: '/AddEmployee',
		name: 'AddEmployee',
		component: AddEmployeeComponent
	}, {
		path: '/UpdateEmployeeInfo',
		name: 'UpdateEmployeeInfo',
		component: ProfileComponent
	}, {
		path: '/OpenCloseSession',
		name: 'OpenCloseSession',
		component: OpenCloseSessionComponent
	}, {
		path: '/Cashbox',
		name: 'Cashbox',
		component: CashboxComponent
	}]
)
export class AppComponent {
	title = 'Tour of Heroes';
}
