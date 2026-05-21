import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DdragonService {
  getProfileIconUrl(id: number): string {
    return `https://ddragon.leagueoflegends.com/cdn/16.10.1/img/profileicon/${id}.png`;
  }
}
