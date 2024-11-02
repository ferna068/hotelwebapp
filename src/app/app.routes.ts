import { Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ServicesComponent } from './pages/services/services.component';
import { AddbookingComponent } from './pages/addbooking/addbooking.component';
import { OffersComponent } from './pages/offers/offers.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'addbooking',
        component: AddbookingComponent
    },
    {
        path: 'booking',
        component: BookingComponent
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: 'galleries',
        component: GalleriesComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'offers',
        component: OffersComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    }
];
