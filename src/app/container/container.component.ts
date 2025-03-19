import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-container',
  imports: [CommonModule,AboutComponent, HeaderComponent, ContactoComponent, FooterComponent, RouterModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {
  constructor(private route: ActivatedRoute, private scroller: ViewportScroller) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToSection(fragment);
      }
    });
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Pequeño retraso para asegurar que el DOM está cargado
    }
  }

}
