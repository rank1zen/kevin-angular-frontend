import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {ZardTabComponent, ZardTabGroupComponent } from '@/shared/components/tabs';
import { Summoner } from '@/profile/summoner';
import { NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  selector: 'app-profile-dashboard',
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    ZardButtonComponent,
  ],
  templateUrl: './profile-dashboard.html',
  styleUrl: './profile-dashboard.css',
})
export class ProfileDashboard {
  private readonly route = inject(ActivatedRoute);

  protected readonly summoner = toSignal(
    this.route.data.pipe(map((data) => data['summoner'] as Summoner)),
  );
}
