import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EntryService {

	baseUrl = 'http://localhost:50404';

	constructor(private http: HttpClient) { }

	getEntry(id) {
		return this.http.get(this.baseUrl + '/api/entries/' + id);
	}

	getAll() {
		return this.http.get(this.baseUrl + '/api/entries');
	}

	createEntry(entry) {
		return this.http.post(this.baseUrl + '/api/entries', entry);
	}

	updateEntry(id, entry) {
		return this.http.put(this.baseUrl + '/api/entries/' + id, entry);
	}

}
