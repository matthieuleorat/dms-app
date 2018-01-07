import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DocumentsComponent } from "./documents/documents.component";
import { LoginComponent } from "./security/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
    },
    {
        path: 'documents',
        component: DocumentsComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
