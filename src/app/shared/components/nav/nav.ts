import { Component, signal,computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly logo = signal('assets/logo2JPG.jpg');
  protected readonly usuario = computed(() => this.session.usuario());

  constructor(private session: SessionService, private router: Router) {}

  logout() {
    this.session.logout();
    this.router.navigate(['/login']);
  }
}
