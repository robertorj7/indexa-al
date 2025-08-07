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
        path: 'list',
        component: ContactListComponent
    },
    {
        path: 'perfil-contato/:id',
        component: ContactProfileComponent        
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
