import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DocumentsComponent } from "./documents/documents.component";
import { LoginComponent } from "./security/login/login.component";
import { AuthGuard } from "./security/guards/index";
import {LogoutComponent} from "./security/logout/logout.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full',
    },
    {
        path: 'documents',
        canActivate: [AuthGuard],
        component: DocumentsComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'logout',
        component: LogoutComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
