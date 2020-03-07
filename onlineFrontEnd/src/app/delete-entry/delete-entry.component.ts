import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-delete-entry',
  templateUrl: './delete-entry.component.html',
  styleUrls: ['./delete-entry.component.css']
})
export class DeleteEntryComponent implements OnInit {

	id;

  constructor(private route: ActivatedRoute, private service: EntryService) { }

  ngOnInit() {
	this.id = this.route.snapshot.paramMap.get('id');
	this.service.getEntry(this.id).subscribe((data) => {
		console.log('Data ', data);
	})
  }

}
