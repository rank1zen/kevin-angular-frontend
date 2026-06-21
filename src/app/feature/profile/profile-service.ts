import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getSummoner(): SummonerModel {
    return {
      level: 977, name: "Doublelift", profileIconId: 1766, tag: "NA1"
    }
  }

  getMatchHistory(): MatchRecordModel[] {
    return [
      {
        championId: 125,
        summonerSpellIds: [0, 1],
        itemIds: [4, 5],
        kills: 4,
        deaths: 5,
        assists: 6
      }
    ]
  }

  getMatchDetail(): {
    
  }
}

export type SummonerModel = {
  profileIconId: number;
  name: string;
  tag: string;
  level: number;
}

export type MatchRecordModel = {
  championId: number;
  summonerSpellIds: number[];
  itemIds: number[];
  kills: number;
  deaths: number;
  assists: number;
}
