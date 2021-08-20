import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from 'src/app/services/toggle.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sliderState', [
        state('active', style({
            left: '0',
            display: 'block'
        })),
        state('inactive', style({
            left: '-300px',
            display: 'none'
        })),
        transition('inactive => active', animate('300ms ease-out')),
        transition('active => inactive', animate('300ms ease-out'))
    ])
]
})
export class SidebarComponent implements OnInit {
  @Input() isActive!: boolean;

  constructor(private router: Router, public toggleService: ToggleService) {    
  }

  ngOnInit() {
    console.log(this.isActive)

  }

}
