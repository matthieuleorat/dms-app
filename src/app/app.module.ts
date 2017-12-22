// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';

// Document
import { DocumentsListComponent } from './documents-list/documents-list.component';
import { DocumentService} from "./Service/document.service";
import { DocumentsComponent } from './documents/documents.component';
import { DocumentTagsListComponent } from './tag/document-tags-list/document-tags-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentsListComponent,
    DocumentsComponent,
    DocumentTagsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
      DocumentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
