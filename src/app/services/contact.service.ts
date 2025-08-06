import { Injectable } from '@angular/core';
import { Contact } from '../components/contact/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  saveContact(contact: Contact) {
    return this.http.post<Contact>(this.apiUrl, contact);
  }
}
