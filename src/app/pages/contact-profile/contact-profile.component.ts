import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-profile',
  standalone: true,
  imports: [
    ContainerComponent,
    ContainerComponent
  ],
  templateUrl: './contact-profile.component.html',
  styleUrl: './contact-profile.component.css'
})
export class ContactProfileComponent {
  contact: Contact = {
    id: 10,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    birthday: '01/01/1990',
    socialMedia: '@johndoe'
  }
}
