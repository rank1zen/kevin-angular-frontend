import { Component, inject, input } from '@angular/core';
import { MatchRecordModel } from '@/feature/profile/profile-service';
import { ZardCardComponent } from '@/shared/components/card';
import { DdragonService } from '@/global/ddragon-service';
import { ChampionWidget } from '@/feature/profile/overview/match-history-card/champion-widget/champion-widget';
import { ZardBadgeComponent } from '@/shared/components/badge';
import { ZardButtonComponent } from '@/shared/components/button';
import { lucideArrowUp, lucidePopcorn } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ZardSegmentedComponent } from '@/shared/components/segmented';
import { ZardAvatarComponent, ZardAvatarGroupComponent } from '@/shared/components/avatar';
import { ScoreboardEntry } from '@/feature/profile/overview/match-history-card/scoreboard/scoreboard-entry/scoreboard-entry';
import { Scoreboard } from '@/feature/profile/overview/match-history-card/scoreboard/scoreboard';

export type MathHistoryCardData = {
  championId: number;
  summonerSpellIds: number[];
  itemIds: number[];
  kills: number;
  deaths: number;
  assists: number;
};

@Component({
  selector: 'app-match-history-card',
  imports: [
    ZardCardComponent,
    ChampionWidget,
    ZardBadgeComponent,
    ZardButtonComponent,
    NgIcon,
    ZardSegmentedComponent,
    ZardAvatarComponent,
    ZardAvatarGroupComponent,
    ScoreboardEntry,
    Scoreboard
  ],
  templateUrl: './match-history-card.html',
  styleUrl: './match-history-card.css',
  viewProviders: [provideIcons({ lucideArrowUp, lucidePopcorn })],
})
export class MatchHistoryCard {
  data = input.required<MathHistoryCardData>()

  options = [
    { value: 'all', label: 'All' },
    { value: 'unread', label: 'Unread' },
    { value: 'archived', label: 'Archived' },
  ];

  onSelectionChange(value: string) {
    console.log('Selected:', value);
  }
}
