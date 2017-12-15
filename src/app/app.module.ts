import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentService} from "./Service/document.service";

import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentsListComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
      DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
