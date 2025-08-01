import { Component } from '@angular/core';
import { ContainerComponent } from "../../components/container/container.component";
import { DividerComponent } from "../../components/divider/divider.component";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ContainerComponent, DividerComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

}
