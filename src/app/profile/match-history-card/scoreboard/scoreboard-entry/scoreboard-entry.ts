import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ZardAvatarComponent, ZardAvatarGroupComponent } from '@/shared/components/avatar';
import { DdragonService } from '@/ddragon/ddragon-service';

export type ScoreboardEntryData = {
  summonerPuuid: string;
  championId: number;
  summonerSpellIds: number[];
  runeIds: number[];
  itemIds: number[];
  summonerName: string;
  summonerTag: string;
};

@Component({
  selector: 'app-scoreboard-entry',
  imports: [ZardAvatarComponent, ZardAvatarGroupComponent],
  templateUrl: './scoreboard-entry.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './scoreboard-entry.css',
})
export class ScoreboardEntry {
  data = input.required<ScoreboardEntryData>();

  ddragonService = inject(DdragonService);
}
