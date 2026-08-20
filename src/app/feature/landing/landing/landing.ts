import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LandingService } from '@/feature/landing/landing-service';
import { Ladder } from '@/feature/landing/landing/ladder/ladder';
import { SearchBar } from '@/feature/landing/landing/search-bar/search-bar';

@Component({
  selector: 'app-landing',
  imports: [Ladder, SearchBar],
  templateUrl: './landing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './landing.css',
})
export class Landing {
  landingService = inject(LandingService);
}
