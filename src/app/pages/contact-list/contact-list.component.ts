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
import { ContactProfileComponent } from "../contact-profile/contact-profile.component";

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
    RouterLink,
    ContactProfileComponent
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
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      console.log(this.contacts)
    });
  }

   private removeAccent(text: string): string {
    if (!text) return '';
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filterContactsByText(): Contact[] {
    if (!this.filterByText) {
      return this.contacts;
    }
    
    return this.contacts.filter(contact => {
      return this.removeAccent(contact.name).toLowerCase().includes(this.removeAccent(this.filterByText).toLowerCase());
    });
  }

  filterContactsByLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => {
      return this.removeAccent(contact.name).toLowerCase().startsWith(this.removeAccent(letter).toLowerCase());
    });
  }
}
