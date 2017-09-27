import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase, private authService: AuthService) {
  }

   save(user: firebase.User) {
     this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL
     });
   }

   getAllUserData(userId) {
     return this.db.list('/users/' + userId );
   }

}
