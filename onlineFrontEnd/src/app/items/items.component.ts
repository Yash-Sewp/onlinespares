import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { SellerElement } from '../interfaces/SellerElements';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import * as $ from 'jquery';
@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

	dataSource: any;

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
			this.dataSource = data;
		});
	}

	slickInit(e) {
	}

}
