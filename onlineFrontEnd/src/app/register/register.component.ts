import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

	registerForm: FormGroup;

	constructor(private fb: FormBuilder, private service: AuthService) {
		this.registerForm = fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
			// Compare password and confirmpassword
		}, { validator: matchingFields('password', 'confirmPassword') });
	}

	onSubmit() {
		delete this.registerForm.value.confirmPassword;
		this.service.register(this.registerForm.value).subscribe((data: any) => {
			console.log(data);
			localStorage.setItem('userName', data.UserName);
			localStorage.setItem('token_value', data.Token);
		});

		// Lzk#$Tck-2repG6u
	}
}

function matchingFields(field1, field2) {
	return form => {
		if (form.controls[field1].value !== form.controls[field2].value) {
			return { matchingFields: true };
		}
	};
}

// Access the entire form object
