import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}, 
    { path: 'layout', component: ContainerComponent }, 

];

export const appRoutingProviders: any[] = [
    provideRouter(routes)
];

export const appRouting = RouterModule.forRoot(routes);