import { Component, input } from '@angular/core';
import { MatchRecordModel } from '@/feature/profile/profile-service';
import { NgOptimizedImage } from '@angular/common';
import { ZardCardComponent } from '@/shared/components/card';

@Component({
  selector: 'app-match-history-card',
  imports: [
    ZardCardComponent
  ],
  templateUrl: './match-history-card.html',
  styleUrl: './match-history-card.css',
})
export class MatchHistoryCard {
  matchRecordModel = input.required<MatchRecordModel>()
}
