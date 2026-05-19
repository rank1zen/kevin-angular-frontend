import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  getLadder(): LadderModel {
    return {
      entries: [
        { rank: 1, summonerName: 'Summoner1', summonerTag: 'TAG1', lp: 1000 },
      ]
    };
  }

  getSearchResults(): SearchResultList {
    return [];
  }
}

export type LadderEntryModel = {
  rank: number;
  summonerName: string;
  summonerTag: string;
  lp: number;
}

export type LadderModel = {
  entries: LadderEntryModel[];
}

export type SearchResult = {
  summonerName: string;
  summonerTag: string;
  rank: number;
}

export type SearchResultList = SearchResult[];
