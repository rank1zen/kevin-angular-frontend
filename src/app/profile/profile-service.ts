import { Injectable } from '@angular/core';
import { Summoner } from '@/profile/summoner';
import { Match } from '@/profile/match';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getSummoner(puuid: string): Summoner {
    return {
      puuid: puuid,
      profileIconId: 12,
      name: 'Doublelift',
      tag: 'NA1',
      level: 132,
    };
  }

  async getMatchList(puuid: string): Promise<Match[]> {
    return Promise.resolve([
      {
        id: 'hi',
        championId: 1,
        summonerSpellIds: [],
        itemIds: [],
        kills: 2,
        deaths: 0,
        assists: 0,
        gameMode: '',
        endTimestamp: new Date(),
      },
    ]);
  }
}
