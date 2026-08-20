import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DdragonService {
  private baseUrl = 'https://ddragon.leagueoflegends.com/cdn/16.10.1';

  getProfileIconUrl(id: number): string {
    return `${this.baseUrl}/img/profileicon/${id}.png`;
  }

  getChampionIconUrl(id: number): string {
    return `${this.baseUrl}/img/champion/Aatrox.png`;
  }
}
