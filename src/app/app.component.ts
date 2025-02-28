import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LayoutComponent, FooterComponent, HeaderComponent, ContainerComponent, AboutComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-project-angular';

}
