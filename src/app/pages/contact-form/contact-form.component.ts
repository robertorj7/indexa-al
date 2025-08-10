import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.initializeForm();
    this.loadContact();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      birthday: new FormControl(''),
      socialMedia: new FormControl(''),
      observations: new FormControl(''),
    });
  }

  getControl(controlName: string): FormControl {
    const control = this.contactForm.get(controlName);
    if (!(control instanceof FormControl)) {
      throw new Error('Controle de formulário inválido: ' + controlName);
    }
    return control;
  }

  loadContact() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContactById(parseInt(id)).subscribe(contact => {
        this.contactForm.patchValue(contact); 
      });
    }
  }

  saveContact() {
    const newContact = this.contactForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    newContact.id = id ? parseInt(id) : null;

    this.contactService.editOrSaveContact(newContact).subscribe(() => {
      this.contactForm.reset();
      this.router.navigateByUrl('/list');
    });
  }

  selectFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.readFile(file);
    }
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        this.contactForm.get('avatar')?.setValue(reader.result);
      }
    }
    reader.readAsDataURL(file);
  }

  cancel() {
    this.contactForm.reset();
    this.router.navigateByUrl('/list');
  }
}
