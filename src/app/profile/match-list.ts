import { Match } from '@/profile/match';

export interface MatchList {
  region: string;
  puuid: string;
  startTimestamp: Date;
  endTimestamp: Date;
  matchList: Match[];
}
