import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';

@Component({
	selector: 'app-new-entry',
	templateUrl: './new-entry.component.html',
	styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent {

	types: Type[] = [
		{ value: true, display: 'Expense' },
		{ value: false, display: 'Income' }
	];

	constructor(private service: EntryService) { }

	entryForm = new FormGroup({
		description: new FormControl('', Validators.required),
		isExpense: new FormControl('', Validators.required),
		value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
	});

	onSubmit() {
		this.service.createEntry(this.entryForm.value).subscribe((data) => {
			// To do something
		});
	}

}
