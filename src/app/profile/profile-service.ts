import { inject, Injectable } from '@angular/core';
import { Summoner } from '@/profile/summoner';
import { MatchHistory } from '@/profile/match-history';
import { RankHistory } from '@/profile/rank-history';
import { createClient } from '@connectrpc/connect';
import { ProfileService as PbProfileService } from '@buf/kevin-labs_lol-service.bufbuild_es/kevin/lolservice/v1/profile_pb';
import { ConnectWebTransport } from '@/connect-transport/connect-web-transport';

type GetMatchHistoryResponse = {
  matchHistory: MatchHistory[];
  nextPageToken?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private connectTransport = inject(ConnectWebTransport).transport;

  private client = createClient(PbProfileService, this.connectTransport);

  async getSummoner(puuid: string): Promise<Summoner> {
    const resp = await this.client.getProfile({
      region: '',
      name: '',
      tag: '',
    });

    return {
      level: 0,
      name: '',
      puuid: '',
      tag: '',
      profileIconId: 1,
    };
  }

  async getMatchHistory(puuid: string): Promise<GetMatchHistoryResponse> {
    const resp = await this.client.getMatchHistory({
      puuid: puuid,
    });

    const result: GetMatchHistoryResponse = {
      nextPageToken: resp.nextPageToken,
      matchHistory: [],
    };

    for (const match of resp.matches) {
      result.matchHistory.push({
        assists: match.assists,
        date: match.date,
      });
    }

    return result;
  }

  async getRankHistory(puuid: string): Promise<RankHistory[]> {
    throw new Error('Method not implemented.');
  }
}
