import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  getLadder(): LadderModel {
    return {
      entries: [
        {
          rank: 1, summonerName: 'Summoner1', summonerTag: 'TAG1', lp: 1000,
          summonerProfileIconId: 1444,
        }
      ]
    };
  }

  getSearchResults(query: string): SearchResultListModel {
    return [];
  }
}

export type LadderEntryModel = {
  rank: number;
  summonerProfileIconId: number;
  summonerName: string;
  summonerTag: string;
  lp: number;
}

export type LadderModel = {
  entries: LadderEntryModel[];
}

export type SearchResultModel = {
  summonerName: string;
  summonerTag: string;
  rank: number;
}

export type SearchResultListModel = SearchResultModel[];
