import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { EntryElement } from '../interfaces/EntryElements';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
	selector: 'app-entries',
	templateUrl: './entries.component.html',
	styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

	displayedColumns: string[] = ['Description', 'IsExpense', 'Value', 'Actions'];
	dataSource: any;

	@ViewChild(MatSort, {static: false}) sort: MatSort;
	@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

	constructor(private service: EntryService, private dialog: MatDialog) { }

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			// Data is an Array of EntryElements
			this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
			this.dataSource.paginator = this.paginator;
		});
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	updateEntry(entry) {
		this.dialog.open(UpdateEntryComponent, {
			data: {
				Id: entry.Id,
				Description: entry.Description,
				IsExpense: entry.IsExpense,
				Value: entry.Value
			}
		});
	}
}
