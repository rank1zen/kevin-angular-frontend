import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { DdragonService } from '@/ddragon/ddragon-service';
import { ZardAvatarComponent, ZardAvatarGroupComponent } from '@/shared/components/avatar';

@Component({
  selector: 'app-champion-widget',
  imports: [ZardAvatarComponent, ZardAvatarGroupComponent],
  templateUrl: './champion-widget.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './champion-widget.css',
})
export class ChampionWidget {
  protected ddragonService = inject(DdragonService);

  championId = input.required<number>();
}
