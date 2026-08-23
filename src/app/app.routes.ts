import { Routes } from '@angular/router';
import { ProfileDashboard } from '@/profile/profile-dashboard/profile-dashboard';
import { ProfileOverview } from '@/profile/profile-overview/profile-overview';
import { summonerResolver } from '@/profile/summoner-resolver';
import { LandingScreen } from '@/landing/landing-screen/landing-screen';

export const routes: Routes = [
  {
    path: '',
    component: LandingScreen,
  },
  {
    path: 'profile/:region/:tag/:name',
    component: ProfileDashboard,
    resolve: {
      summoner: summonerResolver,
    },
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: ProfileOverview,
      },
    ],
  },
];
