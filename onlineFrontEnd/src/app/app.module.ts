import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { EntriesComponent } from './entries/entries.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { UpdateEntryComponent } from './update-entry/update-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// services
import { EntryService } from './entry.service';
import { AuthService } from './auth.service';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule, MatSelectModule,
	MatTableModule, MatToolbarModule, MatDialogModule, MatListModule, MatSortModule, MatPaginatorModule,
	MatIconModule } from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';

// Form
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleItemComponent } from './single-item/single-item.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import * as $ from 'jquery';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemListingComponent } from './item-listing/item-listing.component';

@NgModule({
	declarations: [
		AppComponent,
		EntriesComponent,
		FooterComponent,
		HeaderComponent,
		NewEntryComponent,
		UpdateEntryComponent,
		DeleteEntryComponent,
		RegisterComponent,
		LoginComponent,
		ItemsComponent,
		LandingPageComponent,
		SingleItemComponent,
		CreateItemComponent,
		ItemListingComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRouterModule,
		ReactiveFormsModule,
		FormsModule,
		SlickCarouselModule,

		// Material Design
		BrowserAnimationsModule,
		MatTableModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		MatToolbarModule,
		MatDialogModule,
		MatListModule,
		MatSortModule,
		MatPaginatorModule,
		MatIconModule,
		MaterialFileInputModule
	],
	entryComponents: [UpdateEntryComponent],
	providers: [EntryService, AuthService],
	bootstrap: [AppComponent]
})
export class AppModule { }
