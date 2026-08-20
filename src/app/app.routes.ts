import { Routes } from '@angular/router';
import { ProfileDashboard } from '@/profile/profile-dashboard/profile-dashboard';
import { ProfileOverview } from '@/profile/profile-overview/profile-overview';
import { summonerResolver } from '@/profile/summoner-resolver';
import { ProfileMatchList } from '@/profile/profile-match-list/profile-match-list';

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
      {
        path: 'match-list',
        component: ProfileMatchList,
      },
    ],
  },
];
