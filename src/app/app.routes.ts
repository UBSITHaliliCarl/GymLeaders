import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Kanto } from './kanto/kanto';
import { Johto } from './johto/johto';
import { Rules } from './rules/rules';
import { Hoenn } from './hoenn';

export const routes: Routes = [
  { path: 'kanto', component: Kanto },
  { path: 'johto', component: Johto },
  { 
    path: 'hoenn', 
    component: Johto,
    resolve: {
      leaders: () => inject(Hoenn).getHoennLeaders()
    },
    data: {
      regionName: 'Hoenn',
      cardBorderColor: '#00a896',
      titleColor: '#028090',
      buttonColor: '#00a896'
    }
  },
  { path: 'rules', component: Rules },
  { path: '**', redirectTo: '' }
];
