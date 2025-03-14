import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isTeamsDropdownOpen = false;

  toggleTeamsDropdown() {
    this.isTeamsDropdownOpen = !this.isTeamsDropdownOpen;
  }
}