import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProfileService } from '@/profile/profile-service';

@Component({
  selector: 'app-profile-overview',
  imports: [],
  templateUrl: './profile-overview.html',
  styleUrl: './profile-overview.css',
})
export class ProfileOverview {
  private readonly profileService = inject(ProfileService);

  readonly puuid = signal('');

  protected readonly rankHistoryResource = resource({
    // Define a reactive computation.
    // The params value recomputes whenever any read signals change.
    params: () => ({ puuid: this.puuid() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `params` value changes.
    loader: ({ params }) => this.profileService.getRankHistory(params.puuid),
  });

  protected readonly matchHistoryResource = resource({
    params: () => ({ puuid: this.puuid() }),
    loader: ({ params }) => this.profileService.getMatchHistory(params.puuid),
  });
}
