import { Component, computed, inject, input, OnInit, resource, signal } from '@angular/core';
import { Match } from '@/profile/match';
import { MatchHistoryCard } from '@/profile/match-history-card/match-history-card';
import { ProfileService } from '@/profile/profile-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Summoner } from '@/profile/summoner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-match-list',
  imports: [MatchHistoryCard],
  templateUrl: './profile-match-list.html',
  styleUrl: './profile-match-list.css',
})
export class ProfileMatchList {
  readonly puuid = input.required<string>()

  private readonly profileService = inject(ProfileService);

  private readonly matchListResource = resource({
    // Define a reactive computation.
    // The params value recomputes whenever any read signals change.
    params: () => ({ puuid: this.puuid() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `params` value changes.
    loader: ({ params: { puuid } }) => this.profileService.getMatchList(puuid),
  });

  protected readonly matchList = computed(() => {
    if (this.matchListResource.hasValue()) {
      console.log(this.matchListResource.value());
      return this.matchListResource.value();
    }
    return undefined;
  });
}
