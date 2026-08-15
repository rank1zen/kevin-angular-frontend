import { Component, inject, input } from '@angular/core';
import { ZardAvatarComponent, ZardAvatarGroupComponent } from '@/shared/components/avatar';
import { DdragonService } from '@/global/ddragon-service';

export type ScoreboardEntryData = {
  summonerPuuid: string;
  championId: number
  summonerSpellIds: number[]
  runeIds: number[]
  itemIds: number[]
  summonerName: string
  summonerTag: string
};

@Component({
  selector: 'app-scoreboard-entry',
  imports: [
    ZardAvatarComponent,
    ZardAvatarGroupComponent
  ],
  templateUrl: './scoreboard-entry.html',
  styleUrl: './scoreboard-entry.css'
})
export class ScoreboardEntry {
  data = input.required<ScoreboardEntryData>()

  ddragonService = inject(DdragonService);
}
