import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { SellerElement } from '../interfaces/SellerElements';
import { SellerService } from '../seller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	animations: [
		trigger('openClose', [
			// ...
			state('open', style({
				// height: '200px',
				opacity: 1,
				// backgroundColor: 'yellow'
			})),
			state('closed', style({
				// height: '100px',
				opacity: 0,
				// backgroundColor: 'green'
			})),
			transition('open => closed', [
				animate('1s')
			]),
			transition('closed => open', [
				animate('0.5s')
			]),
		]),
	],
	styleUrls: ['./search-results.component.scss']
})


export class SearchResultsComponent {

	displayedColumns: string[] = ['Img', 'Content'];
	dataSource: any;

	form: FormGroup;

	isOpen: boolean;
	isClosed = true;

	@Output() animateEvent = new EventEmitter<boolean>();

	@ViewChild(MatSort, {static: false}) sort: MatSort;
	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

	constructor(private service: SellerService, private router: Router, private fb: FormBuilder) {
		this.form = fb.group({
			search: new FormControl('', Validators.required)
		});
	}

	onSubmit() {
		// Toggle animations first
		this.animateEvent.emit(this.isOpen);
		if (this.isClosed) {
			this.isClosed = !this.isClosed;
		}
		// Api --> Search results
		this.service.searchSeller(this.form.value.search).subscribe((data: any) => {
			this.dataSource = data;
			this.dataSource = new MatTableDataSource<SellerElement>(data as SellerElement[]);
			this.dataSource.paginator = this.paginator;
		});
	}

	closeSearch() {
		window.location.href = '/';
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
