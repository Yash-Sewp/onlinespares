import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnDestroy {

  constructor(private service: AuthService, private router: Router) { }

  ngOnDestroy() {
	// sessionStorage.removeItem('activationcode');
  }

}
