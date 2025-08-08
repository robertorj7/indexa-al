import { Routes } from '@angular/router';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactProfileComponent } from './pages/contact-profile/contact-profile.component';

export const routes: Routes = [
    {
        path: 'form',
        component: ContactFormComponent
    },
    {
        path: 'form/:id',
        component: ContactFormComponent
    },
    {
        path: 'list',
        component: ContactListComponent
    },
    {
        path: 'contact-profile/:id',
        component: ContactProfileComponent        
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
