import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-container',
  imports: [HeaderComponent, ContactoComponent, FooterComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

}
