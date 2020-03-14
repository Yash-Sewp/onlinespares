import { Component, OnInit, ViewChild } from '@angular/core';
import { SellerService } from '../seller.service';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { SellerElement } from '../interfaces/SellerElements';

@Component({
	selector: 'app-item-listing',
	templateUrl: './item-listing.component.html',
	styleUrls: ['./item-listing.component.css']
})
export class ItemListingComponent implements OnInit {


	displayedColumns: string[] = ['Img', 'Content'];
	dataSource: any;

	@ViewChild(MatSort, {static: false}) sort: MatSort;
	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;



	constructor(private service: SellerService) { }

	ngOnInit() {
		this.service.getAllItem().subscribe((data) => {
			console.log('item listing', data);
			this.dataSource = data;

			this.dataSource = new MatTableDataSource<SellerElement>(data as SellerElement[]);
			this.dataSource.paginator = this.paginator;
		});
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
