import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { ZardCardComponent } from '@/shared/components/card';
import { LadderEntryModel } from '@/feature/landing/landing-service';
import { NgOptimizedImage } from '@angular/common';
import { DdragonService } from '@/global/ddragon-service';

@Component({
  selector: 'app-ladder-entry',
  imports: [ZardCardComponent, NgOptimizedImage],
  templateUrl: './ladder-entry.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './ladder-entry.css',
})
export class LadderEntry {
  ddragonService = inject(DdragonService);

  ladderEntryModel = input.required<LadderEntryModel>();
}
