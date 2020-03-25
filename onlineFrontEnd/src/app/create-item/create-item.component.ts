import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SellerService } from '../seller.service';

@Component({
	selector: 'app-create-item',
	templateUrl: './create-item.component.html',
	styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {

	constructor(private service: SellerService) { }

	sellerForm = new FormGroup({
		firstName: new FormControl('', Validators.required),
		surname: new FormControl('', Validators.required),
		cellNumber: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')]),
		location: new FormControl('', Validators.required),
		title: new FormControl('', Validators.required),
		make: new FormControl('', Validators.required),
		model: new FormControl('', Validators.required),
		partNumber: new FormControl('', Validators.required),
		description: new FormControl('', Validators.required),
		multiplefile: new FormControl('', Validators.required)
	});

	onSubmit() {
		this.service.createSeller(this.sellerForm.value).subscribe((data) => {
			// To do something
		});
	}

}
