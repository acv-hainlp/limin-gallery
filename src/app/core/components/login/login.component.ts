import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router ) {
    authService.user$.subscribe(user => {if(user) router.navigateByUrl('')});
   }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.loginGoogle();
    
  }

}
