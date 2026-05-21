import { Component, inject, input } from '@angular/core';
import { ZardCardComponent } from '@/shared/components/card';
import { LadderEntryModel } from '@/feature/landing/landing-service';
import { NgOptimizedImage } from '@angular/common';
import { DdragonService } from '@/global/ddragon-service';

@Component({
  selector: 'app-ladder-entry',
  imports: [
    ZardCardComponent,
    NgOptimizedImage,
  ],
  templateUrl: './ladder-entry.html',
  styleUrl: './ladder-entry.css'
})
export class LadderEntry {
  ddragonService = inject(DdragonService);

  ladderEntryModel = input.required<LadderEntryModel>();
}
