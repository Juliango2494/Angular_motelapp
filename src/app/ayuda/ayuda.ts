import { Component } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';

@Component({
  selector: 'app-ayuda',
  imports: [Footer,Nav],
  templateUrl: './ayuda.html',
  styleUrl: './ayuda.css'
})
export class Ayuda {

}
