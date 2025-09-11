import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Login } from './login/login';
import { Ayuda } from './ayuda/ayuda';
import { Buscar } from './buscar/buscar';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'ayuda', component: Ayuda},
    {path: 'buscar', component: Buscar}
];
