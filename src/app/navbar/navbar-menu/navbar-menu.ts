import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { ZardButtonComponent } from '@/shared/components/button';
import { LucideMenu } from '@lucide/angular';

@Component({
  selector: 'app-navbar-menu',
  imports: [ZardDropdownImports, ZardButtonComponent, LucideMenu],
  templateUrl: './navbar-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navbar-menu.css',
})
export class NavbarMenu {}
