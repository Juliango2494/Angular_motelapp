import { Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-buscar',
  imports: [Footer,Nav,CommonModule],
  templateUrl: './buscar.html',
  styleUrl: './buscar.css'
})
export class Buscar {
  protected readonly arqJulian = signal('assets/nav/Logo_ARQ_Julian.JPG');
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

}