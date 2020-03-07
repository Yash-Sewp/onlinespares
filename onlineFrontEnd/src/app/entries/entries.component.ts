import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EntryElement } from '../interfaces/EntryElements';
import { UpdateEntryComponent } from '../update-entry/update-entry.component';

@Component({
	selector: 'app-entries',
	templateUrl: './entries.component.html',
	styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

	displayedColumns: string[] = ['Description', 'IsExpense', 'Value', 'Actions'];
	dataSource;

	constructor(private service: EntryService, private dialog: MatDialog) { }

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			console.log('Result ', data);
			// Data is an Array of EntryElements
			this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
		});
	}

	updateEntry(entry) {
		console.log(entry);
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
