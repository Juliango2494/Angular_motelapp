import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // 👉 disponible en toda la app
})
export class SessionService {
    
  private readonly _usuario = signal<string | null>(null);

  usuario = this._usuario.asReadonly(); // 👉 para exponer sin mutar directamente

  login(usuario: string) {
    this._usuario.set(usuario);
  }

  logout() {
    this._usuario.set(null);
  }
}