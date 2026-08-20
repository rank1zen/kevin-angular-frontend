import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  resource,
} from '@angular/core';
import { MatchHistoryCard } from '@/profile/match-history-card/match-history-card';
import { ProfileService } from '@/profile/profile-service';

@Component({
  selector: 'app-profile-match-list',
  imports: [MatchHistoryCard],
  templateUrl: './profile-match-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './profile-match-list.css',
})
export class ProfileMatchList {
  readonly puuid = input.required<string>();

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
