import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matAutoStories } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  viewProviders: [provideIcons({ matAutoStories })],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
