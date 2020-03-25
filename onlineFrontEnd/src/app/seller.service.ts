import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SellerService {

	baseUrl = 'http://localhost:50404';

	constructor(private http: HttpClient) { }

	getSeller(id) {
		return this.http.get(this.baseUrl + '/api/sellers/' + id);
	}

	getAllItem() {
		return this.http.get(this.baseUrl + '/api/sellers');
	}

	createSeller(seller) {
		return this.http.post(this.baseUrl + '/api/sellers', seller);
	}

	updateSeller(id, seller) {
		return this.http.put(this.baseUrl + '/api/sellers' + id, seller);
	}

	deleteSeller(id) {
		return this.http.delete(this.baseUrl + '/api/sellers' + id);
	}

	searchSeller(search) {
		return this.http.get(this.baseUrl + '/api/sellers/search/' + search);
	}
}
