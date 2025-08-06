import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "ana@example.com"}
  ];

  constructor() {
    const localStorageContactsString = localStorage.getItem('contacts');
    const localStorageContacts = localStorageContactsString ? JSON.parse(localStorageContactsString) : null;
    
    this.contacts = localStorageContacts || null;

    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  saveContact(contact: Contact): void {
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
