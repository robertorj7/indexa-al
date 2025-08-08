import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { Contact } from '../../components/contact/contact';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-profile',
  standalone: true,
  imports: [
    ContainerComponent,    
    RouterLink
  ],
  templateUrl: './contact-profile.component.html',
  styleUrl: './contact-profile.component.css'
})

export class ContactProfileComponent implements OnInit{
  contact: Contact = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    birthday: '',
    socialMedia: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContactById(parseInt(id)).subscribe(contact => {
        this.contact = contact;
      });
    }
  }
}
