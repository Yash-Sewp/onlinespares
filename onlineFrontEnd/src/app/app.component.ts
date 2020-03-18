import { Component, HostBinding } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.component';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger('openClose', [
			// ...
			state('open', style({
				opacity: 1,
			})),
			state('closed', style({
				opacity: 0,
			})),
			transition('open => closed', [
				animate('1s')
			]),
			transition('closed => open', [
				animate('0.5s')
			]),
		]),
	],
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'onlineFrontEnd';

	isOpen = true;

	constructor() { }

	showSearch($event) {
		this.isOpen = $event;
	}


	toggle() {
		this.isOpen = !this.isOpen;
	}

}
