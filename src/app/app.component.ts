import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { HeaderComponent } from "./components/header/header.component";
import { DividerComponent } from "./components/divider/divider.component";
import { ContactComponent } from "./components/contact/contact.component";
import contactList from './agenda.json'
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";

interface Contact {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContainerComponent,
    ContainerComponent,
    HeaderComponent,
    DividerComponent,
    ContactComponent,
    FormsModule,
    ContactFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
