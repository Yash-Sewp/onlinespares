import { RouterModule, Routes } from '@angular/router';


// Components
import { EntriesComponent } from './entries/entries.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { NgModule } from '@angular/core';


// routes
const routes: Routes = [
	{ path: '', component: EntriesComponent },
	{ path: 'entries', component: EntriesComponent },
	{ path: 'new-entry', component: NewEntryComponent },
	{ path: 'delete-entry/:id', component: DeleteEntryComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRouterModule { }
