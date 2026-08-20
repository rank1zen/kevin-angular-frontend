import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { LadderModel } from '@/feature/landing/landing-service';
import { LadderEntry } from '@/feature/landing/landing/ladder-entry/ladder-entry';

@Component({
  selector: 'app-ladder',
  imports: [LadderEntry],
  templateUrl: './ladder.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './ladder.css',
})
export class Ladder {
  ladderModel = input.required<LadderModel>();
}
