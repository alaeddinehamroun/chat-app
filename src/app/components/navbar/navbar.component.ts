import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private toggleService: ToggleService) {
  }

  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
    console.log(this.toggleService.showSidebar)
  }
  isActive() {
    return this.toggleService.showSidebar
  }
}
