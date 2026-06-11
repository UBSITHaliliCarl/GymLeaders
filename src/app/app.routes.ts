import { Routes } from '@angular/router';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Hoenn } from './hoenn/hoenn';
import { Rules } from './rules/rules';

export const routes: Routes = [
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { path: 'hoenn', component: Hoenn },
  { path: 'rules', component: Rules },
  { path: '**', redirectTo: '' }
];
