import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-container',
  imports: [CommonModule,AboutComponent, HeaderComponent, ContactoComponent, FooterComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

}
