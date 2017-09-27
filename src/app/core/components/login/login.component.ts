import { Subscription } from 'rxjs/Rx';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription$: Subscription;

  constructor(private authService: AuthService, private router: Router, private userService: UserService ) {
    this.subscription$ = authService.user$.subscribe(user => {
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
  
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription$.unsubscribe;
  }

}
