import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import contactList from '../../agenda.json'
import { RouterLink } from '@angular/router';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    ContainerComponent, 
    HeaderComponent,
    DividerComponent,
    ContactComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = contactList;

  filterByText: string = '';

  filterContactsByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts;
    }
    
    return this.contacts.filter(contact => 
      contact.nome.toLowerCase().startsWith(this.filterByText.toLowerCase())
    );
  }

  filterContactsByLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => contact.nome.toLowerCase().startsWith(letter));
  }
}
