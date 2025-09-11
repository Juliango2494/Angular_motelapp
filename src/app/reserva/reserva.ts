import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { SessionService } from '../shared/services/session.service';

interface Motel {
  id: number;
  name: string;
  description: string;
  price: number;
  location: string;
  rating: number;
  images: string[]; 
}

interface Habitacion {
  motelId: number;
  motelName: string;
  habitacionName: string;
  location: string;
  price: number;
  image: string;
}

interface Reserva {
  usuario: string;
  habitacion: Habitacion;
  fecha: Date;
}

@Component({
  selector: 'app-reserva',
  imports: [Footer, Nav, CommonModule, FormsModule], 
  templateUrl: './reserva.html',
  styleUrl: './reserva.css'
})
export class Reservas {   

  constructor(private session: SessionService) {}

  protected readonly motels = signal<Motel[]>([
    {
      id: 1,
      name: 'Ankara',
      description: 'Habitaciones modernas con jacuzzi y TV por cable.',
      price: 120000,
      location: 'Armenia, Colombia',
      rating: 4.2,
      images: [
        'assets/moteles/ankara1.jpg',
        'assets/moteles/ankara2.png',
        'assets/moteles/ankara3.jpeg',
        'assets/moteles/ankara4.jpeg',
        'assets/moteles/ankara5.jpeg'
      ]
    },
    {
      id: 2,
      name: 'La Guaca',
      description: 'Habitaciones con jacuzzi, camas king size y TV por cable.',
      price: 180000,
      location: 'Armenia, Colombia',
      rating: 4.5,
      images: [
        'assets/moteles/guaca1.jpeg',
        'assets/moteles/guaca2.jpeg',
        'assets/moteles/guaca3.jpeg',
        'assets/moteles/guaca4.jpeg'
      ]
    },
    {
      id: 3,
      name: 'Paradise',
      description: 'Los mejores precios y habitaciones mas comodas del sector',
      price: 90000,
      location: 'Armenia, Colombia',
      rating: 4.0,
      images: [
        'assets/moteles/paradise1.jpg',
        'assets/moteles/paradise2.jpeg',
        'assets/moteles/paradise.jpeg',
        'assets/moteles/paradise4.jpeg',
        'assets/moteles/paradise5.jpeg'
      ]
    }
  ])
  protected readonly habitaciones = signal<Habitacion[]>(
    this.motels().flatMap(motel =>
      motel.images.slice(1).map((img, index) => ({
        motelId: motel.id,
        motelName: motel.name,
        habitacionName: `Habitación ${index + 1}`,
        location: motel.location,
        price: motel.price,
        image: img
      }))
    )
  );

  protected readonly query = signal('');
  protected readonly resultados = computed(() => {
    const q = this.query().toLowerCase();
    return this.habitaciones().filter(
      h =>
        h.motelName.toLowerCase().includes(q) ||
        h.habitacionName.toLowerCase().includes(q)
    );
  });

  protected readonly reservas = signal<Reserva[]>([]);

  reservar(habitacion: Habitacion) {
    const usuario = this.session.usuario();
    if (!usuario) {
      alert('Debes iniciar sesión para reservar');
      return;
    }

    const nuevaReserva: Reserva = {
      usuario,
      habitacion,
      fecha: new Date()
    };

    this.reservas.update(rs => [...rs, nuevaReserva]);
    alert(`Reserva creada para ${habitacion.habitacionName} en ${habitacion.motelName}`);
  }

  protected readonly misReservas = computed(() => {
    const usuario = this.session.usuario();
    return this.reservas().filter(r => r.usuario === usuario);
  });

  
  onQueryChange(value: string) {
    this.query.set(value);
  }
  

}