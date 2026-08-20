import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
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
