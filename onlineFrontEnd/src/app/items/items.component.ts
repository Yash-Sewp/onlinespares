import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { SellerElement } from '../interfaces/SellerElements';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import * as $ from 'jquery';
@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	dataSource;

	slides = [
		{ img: 'http://placehold.it/350x150/000000' },
		{ img: 'http://placehold.it/350x150/111111' },
		{ img: 'http://placehold.it/350x150/333333' },
		{ img: 'http://placehold.it/350x150/666666' }
	];

	slideConfig = {
		'slidesToShow': 4,
			'slidesToScroll': 4,
			'responsive': [
				{
					'breakpoint': 767,
					'settings': {
						'slidesToShow': 1,
						'slidesToScroll': 1
					}
				}
			]
	};



	constructor(private service: SellerService) { }

	ngOnInit() {
		this.service.getAllItem().subscribe((data) => {
			console.log('All seller Items', data);
			this.dataSource = data;
		});
	}

	slickInit(e) {
		console.log('slick initialized');
	}

}
