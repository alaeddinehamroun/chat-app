import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user!: IUser;
  constructor(private toggleService: ToggleService,
              private authService: AuthService,
              private router: Router) {    
  }
  
  ngOnInit(): void {
    this.authService.getUserInfos().subscribe({
      next: (user) => this.user = user,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
  }

  toggleSidebar() {
    this.toggleService.showSidebar = !this.toggleService.showSidebar;
    console.log(this.toggleService.showSidebar)
  }

  isActive() {
    return this.toggleService.showSidebar
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login'])
  }

}
