import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/services.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
  
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control?.hasError('email')) {
      return 'El email no es válido';
    }
    if (control?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres';
    }
    return '';
  }
  
  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); 
      console.error('Formulario inválido');
      return;
    }
  
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        console.log('Login exitoso');
        this.router.navigateByUrl('/layout', { replaceUrl: true });
      },
      error: (err) => {
        console.error('Error al iniciar sesión', err);
        this.errorMessage = 'Error al iniciar sesión';
      }
    });
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
