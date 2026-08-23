import { MatchHistory } from '@/profile/match-history';

export interface MatchList {
  region: string;
  puuid: string;
  startTimestamp: Date;
  endTimestamp: Date;
  matchList: MatchHistory[];
}
