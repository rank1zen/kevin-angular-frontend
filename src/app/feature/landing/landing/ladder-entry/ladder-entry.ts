import { Component, input } from '@angular/core';
import { ZardCardComponent } from '@/shared/components/card';
import { LadderEntryModel } from '@/feature/landing/landing-service';

@Component({
  selector: 'app-ladder-entry',
  imports: [
    ZardCardComponent
  ],
  templateUrl: './ladder-entry.html',
  styleUrl: './ladder-entry.css'
})
export class LadderEntry {
  ladderEntryModel = input.required<LadderEntryModel>();
}
