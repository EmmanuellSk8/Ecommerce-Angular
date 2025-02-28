import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports:[FormsModule]
})
export class RegisterComponent {
  constructor(private router: Router) {}

  login(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido, iniciando sesión...');
      this.router.navigate(['/login']);
    } else {
      console.error('Formulario inválido');
    }
  }

  logIn() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}


