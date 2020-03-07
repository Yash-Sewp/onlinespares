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

// services
import { EntryService } from './entry.service';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule, MatSelectModule,
	MatTableModule, MatToolbarModule, MatDialogModule } from '@angular/material';

// Form
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';

@NgModule({
	declarations: [
		AppComponent,
		EntriesComponent,
		FooterComponent,
		HeaderComponent,
		NewEntryComponent,
		UpdateEntryComponent,
		DeleteEntryComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRouterModule,
		ReactiveFormsModule,
		// Material Design
		BrowserAnimationsModule,
		MatTableModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		MatToolbarModule,
		MatDialogModule
	],
	entryComponents: [UpdateEntryComponent],
	providers: [EntryService],
	bootstrap: [AppComponent]
})
export class AppModule { }
