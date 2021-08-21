import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  }
  invalidCredentials: boolean = false;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn())
      this.router.navigate(['chatroom'])
  }

  login() {
    this.invalidCredentials = false
    const { email, password } = this.form;
    console.log(this.form)
    if (email && password) {
      this.authService.login(email, password)
        .subscribe({
          error: (e) => {
            if (e.status === 400)
              this.invalidCredentials = true
          },
          next: (res) => {
            this.authService.user = res.user
          },
          complete: () => {
            console.log("User is logged in");
            this.router.navigate(['chatroom'])
          }
        });
    }
    else
      console.log('error')
  }


}
