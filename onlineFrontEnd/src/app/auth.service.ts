import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	baseUrl = 'http://localhost:50404/auth/';

	constructor(private http: HttpClient, private router: Router) { }

	register(user) {
		return this.http.post(this.baseUrl + 'register', user);
	}

	login(user) {
		return this.http.post(this.baseUrl + 'login', user);
	}

	logout() {
		localStorage.removeItem('userName');
		localStorage.removeItem('token_value');
		this.router.navigate(['/']);
	}

	get getUserName() {
		return localStorage.getItem('userName');
	}

	get isAuthenticated() {
		return !!localStorage.getItem('token_value');
	}
}
