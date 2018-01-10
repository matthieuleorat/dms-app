// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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

// Security
import { LoginComponent } from './security/login/login.component';
import {SecurityService} from "./Service/security.service";
import { AuthGuard } from "./security/guards/index";
import { LogoutComponent } from './security/logout/logout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DmsLayoutComponent } from './layouts/dms-layout/dms-layout.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DocumentsListComponent,
    DocumentsComponent,
    DocumentTagsListComponent,
    LoginComponent,
    LogoutComponent,
    LoginLayoutComponent,
    DmsLayoutComponent,
    DocumentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
      DocumentService,
      SecurityService,
      AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
