import { Component, inject } from '@angular/core';
import { LandingService } from '@/feature/landing/landing-service';
import { Ladder } from '@/feature/landing/landing/ladder/ladder';

@Component({
  selector: 'app-landing',
  imports: [
    Ladder
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  landingService = inject(LandingService);
}
