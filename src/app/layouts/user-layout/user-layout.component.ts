import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  constructor(private toggleService: ToggleService) {
   }
  ngOnInit() {
  }
  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
  }

}
