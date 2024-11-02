import { Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
