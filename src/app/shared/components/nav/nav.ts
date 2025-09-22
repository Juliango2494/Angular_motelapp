import { Component, signal,computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UiService } from '../../services/tema.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class Nav {
  protected readonly logo = signal('assets/logo2JPG.jpg');
  protected readonly usuario = computed(() => this.session.usuario());
 
  cambiarTema(){
    this.ui.toggleTema();
  };

  constructor(private session: SessionService, private router: Router,public ui:UiService) {}

  logout() {
    this.session.logout();
    this.router.navigate(['/login']);
  }
}
