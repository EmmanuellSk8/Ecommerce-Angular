import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/services.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }    

  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);
    
    if (control?.hasError('username')) {
      return 'Este campo es obligatorio';
    }

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


  register() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Formulario inválido. Verifica los campos.';
      return;
    }

    const formData = this.registerForm.value;

    this.http.post('https://overflowing-radiance-production.up.railway.app/auth/register', formData).subscribe({
      next: () => {
        alert('Registro exitoso');
        this.registerForm.reset();
        this.errorMessage = ''; 
      },
      error: (err) => {
        console.error('Error al registrar', err);
        if (err.status === 409) {
          this.errorMessage = 'El email ya está registrado. Intenta con otro.';
        } else if (err.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica los campos.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado. Intenta más tarde.';
        }
      }
    });
  }


  logIn() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}

