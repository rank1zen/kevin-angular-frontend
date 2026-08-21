import { Injectable } from '@angular/core';
import { Summoner } from '@/profile/summoner';
import { MatchHistory } from '@/profile/match-history';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getSummoner(puuid: string): Summoner {
    throw new Error('Method not implemented.');
  }

  async getMatchList(puuid: string): Promise<MatchHistory[]> {
    throw new Error('Method not implemented.');
  }
}
