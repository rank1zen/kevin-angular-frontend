import { Component } from '@angular/core';
import { NavbarMenu } from '@/global/navbar/navbar-menu/navbar-menu';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarMenu,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {}
