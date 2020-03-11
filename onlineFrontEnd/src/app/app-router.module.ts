import { RouterModule, Routes } from '@angular/router';


// Components
import { EntriesComponent } from './entries/entries.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateItemComponent } from './create-item/create-item.component';


import { NgModule } from '@angular/core';


// routes
const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'home', component: LandingPageComponent },
	{ path: 'entries', component: EntriesComponent },
	{ path: 'new-entry', component: NewEntryComponent },
	{ path: 'create-post', component: CreateItemComponent },
	{ path: 'delete-entry/:id', component: DeleteEntryComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: ':id', component: SingleItemComponent  }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRouterModule { }
