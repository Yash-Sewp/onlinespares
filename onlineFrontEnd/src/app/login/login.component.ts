import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	// Empty object used for binding
	loginData = {
		userName: '',
		password: ''
	};
	// check: any;

	constructor(private service: AuthService, private router: Router) { }

	login() {
		this.service.login(this.loginData).subscribe((data: any) => {
			if (data.ActivationCode != null) {
				// sessionStorage.setItem('activationcode', data.ActivationCode);
				this.router.navigate(['/verifyaccount']);
			} else {
				localStorage.setItem('userName', data.UserName);
				localStorage.setItem('token_value', data.Token);
			}

			//   this.router.navigate(['/create-post']);
		},
			(error) => alert(error.error.Message));
	}


}

