import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiService } from './shared/services/tema.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public ui:UiService) {}

  protected readonly title = signal('Angular3layout');
}
