import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido, iniciando sesión...');
      this.router.navigateByUrl('/layout', { replaceUrl: true });
    } else {
      console.log('Formulario inválido');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
