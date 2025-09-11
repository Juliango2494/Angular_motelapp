import { Component } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../shared/services/session.service'; // 👈 importamos el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Footer,Nav,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';

  newUser = {
    username: '',
    email: '',
    password: ''
  };

  isRegisterMode = false;
  message = '';

  private usuarios = [
    { username: 'admin', password: '1234' },
    { username: 'julian', password: '5678' },
    { username: 'maria', password: 'abcd' }
  ];

  constructor(private session: SessionService, private router: Router) {}

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.message = '';
  }

  login() {const user = this.usuarios.find(
      u => u.username === this.username && u.password === this.password
    );

    if (user) {
      this.session.login(user.username); // guardamos en signal
      this.message = '✅ Login exitoso';
      setTimeout(() => this.router.navigate(['/']), 1000); // redirige al home
    } else {
      this.message = '❌ Usuario o contraseña incorrectos';
    }
  }

  register() {
    const exists = this.usuarios.find(u => u.username === this.newUser.username);

    if (exists) {
      this.message = '⚠️ El usuario ya existe';
      return;
    }

    this.usuarios.push({
      username: this.newUser.username,
      password: this.newUser.password
    });

    this.message = '✅ Registro exitoso, ahora inicia sesión';
    this.isRegisterMode = false;
  }
}
