import { Routes } from '@angular/router';
import { ProfileDashboard } from '@/profile/profile-dashboard/profile-dashboard';
import { ProfileOverview } from '@/profile/profile-overview/profile-overview';
import { summonerResolver } from '@/profile/summoner-resolver';

export const routes: Routes = [
  {
    path: 'profile/:puuid',
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
