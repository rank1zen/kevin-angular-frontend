import { Component } from '@angular/core';
import { ZardDropdownImports } from '@/shared/components/dropdown';
import { ZardDividerComponent } from '@/shared/components/divider';
import { ZardMenuImports } from '@/shared/components/menu';
import { ZardButtonComponent } from '@/shared/components/button';
import { LucideMenu } from '@lucide/angular';

@Component({
  selector: 'app-navbar-menu',
  imports: [
    ZardDropdownImports,
    ZardMenuImports,
    ZardButtonComponent,
    LucideMenu
  ],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.css',
})
export class NavbarMenu {}
