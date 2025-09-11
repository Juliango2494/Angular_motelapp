import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-ayuda',
  imports: [CommonModule, FormsModule, Nav, Footer],
  templateUrl: './ayuda.html',
  styleUrl: './ayuda.css'
})
export class Ayuda {

  nombre = '';
  correo = '';
  motivo = '';
  mensaje = '';

  enviar() {
    if (!this.nombre || !this.correo || !this.motivo || !this.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }
    alert(`Correo enviado correctamente a soporte. Gracias ${this.nombre}!`);
    
    // ✅ Limpia el formulario
    this.nombre = '';
    this.correo = '';
    this.motivo = '';
    this.mensaje = '';
  }
}