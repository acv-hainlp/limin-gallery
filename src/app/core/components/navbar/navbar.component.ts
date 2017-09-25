import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed;

  constructor(public authService: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

}
