import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
}
  error!: string;

  constructor( private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn())
    this.router.navigate(['chatroom'])
  }
  register() {
    console.log("reg")
    this.error = '';
    const {username,email,password} = this.form;
    console.log(this.form)
    if (username && email && password) {
        this.authService.register(username,email, password)
            .subscribe(
                (response) => {
                    console.log("User is registered");
                    console.log(response)
                    this.router.navigate([''])
                }
            );
    }
    else
     console.log('error')
}
}
