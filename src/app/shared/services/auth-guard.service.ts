import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate  {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.user$.map(user => {
      if (user) return true;

      this.router.navigate(['login']);
      return false;
    });
  }

}
