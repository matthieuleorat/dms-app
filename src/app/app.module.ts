// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

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
import { LoginComponent } from './security/login/login.component';
import {SecurityService} from "./Service/security.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentsListComponent,
    DocumentsComponent,
    DocumentTagsListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
      DocumentService,
      SecurityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
