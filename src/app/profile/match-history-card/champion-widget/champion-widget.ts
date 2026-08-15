import { Component, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DdragonService } from '@/global/ddragon-service';
import { ZardAvatarComponent, ZardAvatarGroupComponent } from '@/shared/components/avatar';

@Component({
  selector: 'app-champion-widget',
  imports: [
    ZardAvatarComponent,
    ZardAvatarGroupComponent
  ],
  templateUrl: './champion-widget.html',
  styleUrl: './champion-widget.css',
})
export class ChampionWidget {
  protected ddragonService = inject(DdragonService);

  championId = input.required<number>();
}
