import { ResolveFn } from '@angular/router';
import { Summoner } from '@/profile/summoner';
import { inject } from '@angular/core';
import { ProfileService } from '@/profile/profile-service';

export const summonerResolver: ResolveFn<Summoner> = (route, state) => {
  const puuid = route.paramMap.get('puuid')!;
  return inject(ProfileService).getSummoner(puuid);
};
