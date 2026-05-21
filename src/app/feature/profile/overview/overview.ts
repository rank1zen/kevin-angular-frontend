import { Component, inject, signal } from '@angular/core';
import { MatchHistoryCard } from '@/feature/profile/overview/match-history-card/match-history-card';
import { MatchRecordModel, ProfileService } from '@/feature/profile/profile-service';
import {
  MatchHistoryCardSkeleton
} from '@/feature/profile/overview/match-history-card-skeleton/match-history-card-skeleton';

@Component({
  selector: 'app-overview',
  imports: [
    MatchHistoryCard,
    MatchHistoryCardSkeleton
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
  profileService = inject(ProfileService);

  matchHistory = signal<MatchRecordModel[] | null>(null);

  fetchMatchHistory() {
    const matchHistoryModel = this.profileService.getMatchHistory()
    this.matchHistory.set(matchHistoryModel);
  }

  ngOnInit() {
    this.fetchMatchHistory()
  }
}
