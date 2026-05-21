import { Component } from '@angular/core';
import { ZardSkeletonComponent } from '@/shared/components/skeleton';

@Component({
  selector: 'app-match-history-card-skeleton',
  imports: [
    ZardSkeletonComponent
  ],
  templateUrl: './match-history-card-skeleton.html',
  styleUrl: './match-history-card-skeleton.css',
})
export class MatchHistoryCardSkeleton {}
