import { UserAlbumsService } from './shared/services/user-albums.service';
import { UserService } from './shared/services/user.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { environment } from './../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './core/components/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumFormComponent } from './profile/album-form/album-form.component';
import { AlbumCardComponent } from './profile/album-card/album-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    AlbumFormComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, },
      { path: 'login', component: LoginComponent},
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    UserAlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
