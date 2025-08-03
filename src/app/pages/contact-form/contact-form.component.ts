import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { DividerComponent } from "../../components/divider/divider.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ContainerComponent, DividerComponent, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm!: FormGroup

  constructor() {
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
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      console.log('Contato salvo:', contactData);      
    } else {
      console.log('Formulário inválido');
    }
  }

  cancel() {
    this.contactForm.reset();
  }
}
