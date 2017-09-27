import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UserAlbumsService {
  userId: string;
  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  create(newAlbum) {
    newAlbum.createOn = Date.now();
    let newAlbumDb = this.removeNull(newAlbum);
    
    this.db.list('/users/' + this.userId + '/albums/').push(newAlbumDb); //push to root/users/{{userId}}/albums/
  }

  removeNull(object) {
    for (let key in object) {
      let value = object[key];
      if (!value) delete object[key];
    }

    return object;
  }
}
