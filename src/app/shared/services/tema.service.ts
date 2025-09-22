import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // estado global del tema
  private readonly _temaOscuro = signal(false);

  // exposición de solo lectura
  readonly temaOscuro = this._temaOscuro.asReadonly();

  // alternar tema
  toggleTema() {
    this._temaOscuro.update(v => !v);
  }

  // fijar tema explícitamente
  setTemaOscuro(valor: boolean) {
    this._temaOscuro.set(valor);
  }
}