import { Routes } from '@angular/router';
import { Landing } from './feature/landing/landing/landing';
import { Overview } from '@/feature/profile/overview/overview';

export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  {
    path: 'profile',
    component: Overview
  },
];
