import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { ZardCardComponent } from '@/shared/components/card';
import { ZardBadgeComponent } from '@/shared/components/badge';
import { ZardButtonComponent } from '@/shared/components/button';
import { lucideArrowUp, lucidePopcorn } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';
import { Match } from '@/profile/match';
import { ZardAvatarComponent, ZardAvatarGroupComponent } from '@/shared/components/avatar';
import { DdragonService } from '@/ddragon/ddragon-service';

@Component({
  selector: 'app-match-history-card',
  imports: [
    ZardCardComponent,
    ZardBadgeComponent,
    ZardButtonComponent,
    ZardAvatarComponent,
    ZardAvatarGroupComponent,
  ],
  templateUrl: './match-history-card.html',
  styleUrl: './match-history-card.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  viewProviders: [provideIcons({ lucideArrowUp, lucidePopcorn })],
})
export class MatchHistoryCard {
  protected readonly ddragonService = inject(DdragonService);

  readonly match = input.required<Match>();

  options = [
    { value: 'all', label: 'All' },
    { value: 'unread', label: 'Unread' },
    { value: 'archived', label: 'Archived' },
  ];

  onSelectionChange(value: string) {
    console.log('Selected:', value);
  }
}
