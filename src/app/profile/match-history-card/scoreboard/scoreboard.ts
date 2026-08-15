import { Component, input } from '@angular/core';
import {
  ScoreboardEntry,
  ScoreboardEntryData
} from '@/profile/match-history-card/scoreboard/scoreboard-entry/scoreboard-entry';

export type ScoreboardData = {
  players: ScoreboardEntryData[]
}

@Component({
  selector: 'app-scoreboard',
  imports: [ScoreboardEntry],
  templateUrl: './scoreboard.html',
  styleUrl: './scoreboard.css',
})
export class Scoreboard {
  data = input.required<ScoreboardData>();
}
