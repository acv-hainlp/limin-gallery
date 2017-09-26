import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService ) {
    authService.user$.subscribe(user => {
      if(user) {
        userService.save(user);
        router.navigateByUrl('');
      }
    });
   }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginGoogle();
    
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

}
