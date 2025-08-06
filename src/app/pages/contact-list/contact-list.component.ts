import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DividerComponent } from '../../components/divider/divider.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
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
export class ContactListComponent implements OnInit {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = [];

  filterByText: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

   private removeAccent(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactsByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts;
    }
    
    return this.contacts.filter(contact => {
      return this.removeAccent(contact.nome).toLowerCase().includes(this.removeAccent(this.filterByText).toLowerCase());
    });
  }

  filterContactsByLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => {
      return this.removeAccent(contact.nome).toLowerCase().startsWith(this.removeAccent(letter).toLowerCase());
    });
  }
}
