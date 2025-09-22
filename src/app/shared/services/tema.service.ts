import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  private readonly _temaOscuro = signal(false);

 
  readonly temaOscuro = this._temaOscuro.asReadonly();

  
  toggleTema() {
    this._temaOscuro.update(v => !v);
  }

  setTemaOscuro(valor: boolean) {
    this._temaOscuro.set(valor);
  }
}