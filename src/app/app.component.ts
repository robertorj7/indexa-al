import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { DividerComponent } from "./components/divider/divider.component";
import { ContactComponent } from "./components/contact/contact.component";

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

import contactList from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, ContainerComponent, HeaderComponent, DividerComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  contacts: Contact[] = contactList;

  filterContactsByLetter(letter: string): Contact[] {
    return this.contacts.filter(contact => contact.nome.toLowerCase().startsWith(letter));
  }
}
