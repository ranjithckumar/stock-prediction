import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    EditNotesComponent,
    SearchComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
