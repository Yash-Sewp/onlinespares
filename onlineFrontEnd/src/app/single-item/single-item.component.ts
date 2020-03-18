import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

	seller = {
		FirstName: '',
		LastName: '',
		EmailAddress: '',
		CellNumber: 0,
		Location: '',

		Title: '',
		Make: '',
		Model: '',
		PartNumber: '',
		Description: '',

		ImageOne: '',
		ImageTwo: '',
		ImageThree: '',
		ImageFour: '',
		ImageFive: '',
	};

	id;

  constructor(private route: ActivatedRoute, private service: SellerService,
	private router: Router) { }

  ngOnInit() {
	this.id = this.route.snapshot.paramMap.get('id');
	this.service.getSeller(this.id).subscribe((data: any) => {
		this.seller.FirstName = data.FirstName;
		this.seller.LastName = data.LastName;
		this.seller.EmailAddress = data.EmailAddress;
		this.seller.CellNumber = data.CellNumber;
		this.seller.Location = data.Location;
		this.seller.Title = data.Title;
		this.seller.Make = data.Make;
		this.seller.Model = data.Model;
		this.seller.PartNumber = data.PartNumber;
		this.seller.Description = data.Description;
		this.seller.ImageOne = data.ImageOne;
		this.seller.ImageTwo = data.ImageTwo;
		this.seller.ImageThree = data.ImageThree;
		this.seller.ImageFour = data.ImageFour;
		this.seller.ImageFive = data.ImageFive;
	});
  }

}
