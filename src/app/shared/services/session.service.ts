import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class SessionService {
    
  private readonly _usuario = signal<string | null>(null);

  usuario = this._usuario.asReadonly(); 

  login(usuario: string) {
    this._usuario.set(usuario);
  }

  logout() {
    this._usuario.set(null);
  }
}