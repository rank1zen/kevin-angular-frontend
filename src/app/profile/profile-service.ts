import { Injectable } from '@angular/core';
import { Summoner } from '@/profile/summoner';
import { MatchHistory } from '@/profile/match-history';
import { RankHistory } from '@/profile/rank-history';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  async getSummoner(puuid: string): Promise<Summoner> {
    throw new Error('Method not implemented.');
  }

  async getMatchHistory(puuid: string): Promise<MatchHistory[]> {
    throw new Error('Method not implemented.');
  }

  async getRankHistory(puuid: string): Promise<RankHistory[]> {
    throw new Error('Method not implemented.');
  }
}
