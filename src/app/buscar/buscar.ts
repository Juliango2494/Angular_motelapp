import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

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
  location: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-buscar',
  imports: [Footer,Nav,CommonModule],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css'
})
export class Buscar {
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
        'assets/moteles/paradise3.jpeg',
        'assets/moteles/paradise4.jpeg',
        'assets/moteles/paradise5.jpeg'
      ]
    }
  ])
  protected readonly habitaciones = signal<Habitacion[]>(
    this.motels().flatMap(motel =>
      motel.images.slice(1).map(img => ({
        motelId: motel.id,
        motelName: motel.name,
        location: motel.location,
        price: motel.price,
        description: motel.description,
        image: img
      }))
    )
  );

  protected readonly selectedMotel = signal<number>(0);

  protected readonly habitacionesFiltradas = computed(() =>
    this.selectedMotel() === 0
      ? this.habitaciones()
      : this.habitaciones().filter(
          h => h.motelId === this.selectedMotel()
        )
  );

  cambiarFiltro(id: number) {
    this.selectedMotel.set(id);
  }

}