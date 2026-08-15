export interface Match {
  id: string;
  gameMode: string;
  championId: number;
  summonerSpellIds: number[];
  itemIds: number[];
  kills: number;
  deaths: number;
  assists: number;
  endTimestamp: Date;
}
