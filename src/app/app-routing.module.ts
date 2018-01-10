import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DocumentsComponent } from "./documents/documents.component";
import { LoginComponent } from "./security/login/login.component";
import { AuthGuard } from "./security/guards/index";
import {LogoutComponent} from "./security/logout/logout.component";
import {LoginLayoutComponent} from "./layouts/login-layout/login-layout.component";
import {DmsLayoutComponent} from "./layouts/dms-layout/dms-layout.component";

const routes: Routes = [
        {
        path: '',
        component: DmsLayoutComponent,
        canActivate: [AuthGuard],
        children: [
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
                path: 'logout',
                component: LogoutComponent,
            }
        ]
    },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
