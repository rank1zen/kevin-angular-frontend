import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarMenu } from '@/global/navbar/navbar-menu/navbar-menu';

@Component({
  selector: 'app-navbar',
  imports: [NavbarMenu],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navbar.css',
})
export class Navbar {}
