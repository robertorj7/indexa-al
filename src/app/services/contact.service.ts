import { Injectable } from '@angular/core';

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235"},
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459"},
    {"id": 5, "nome": "Carlos", "telefone": "94 543197849"},
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
}
