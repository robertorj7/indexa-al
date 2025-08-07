import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContainerComponent } from "../../components/container/container.component";
import { DividerComponent } from "../../components/divider/divider.component";
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule, 
    ContainerComponent, 
    DividerComponent, 
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      birthday: new FormControl(''),
      socialMedia: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  saveContact() {
    const newContact = this.contactForm.value;
    this.contactService.saveContact(newContact).subscribe(() => {
      this.contactForm.reset();
      this.router.navigateByUrl('/list');      
    });
  }

  cancel() {
    this.contactForm.reset();
  }
}
