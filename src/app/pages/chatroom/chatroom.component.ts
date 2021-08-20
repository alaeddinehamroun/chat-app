import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent  {
  constructor(private toggleService: ToggleService) {
  }
  isActive() {
    return this.toggleService.showSidebar
  }
}
