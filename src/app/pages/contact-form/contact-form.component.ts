import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { DividerComponent } from "../../components/divider/divider.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(''),
      socialMedia: new FormControl(''),
      observations: new FormControl(''),
    });
  }
}
