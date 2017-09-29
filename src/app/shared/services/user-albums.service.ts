import { Album } from '../models/album';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class UserAlbumsService {
  userId: string;
  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  create(newAlbum: Album) {
    newAlbum.createOn = Date.now();
    let newAlbumDb = this.removeNull(newAlbum);

    if (newAlbum.photo) {
      let photoName = this.userId + '_' + newAlbum.createOn //set new unique name
      let rootPath = firebase.storage().ref();
      let filePath = '/images/'+ this.userId + ('/') + photoName
      let upLoad = rootPath.child(filePath).put(newAlbum.photo[0]);
  
      upLoad.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {},
        (error) => { console.log(error) },// upload failed
        () => {
          // upload success
          newAlbum.photoUrl = upLoad.snapshot.downloadURL;
         this.db.list('/users/' + this.userId + '/albums/').push(newAlbumDb);
        });
      } else this.db.list('/users/' + this.userId + '/albums/').push(newAlbumDb);
    };
    

  delete(albumId) {
    this.db.object('/users/' + this.userId + '/albums/' + albumId).remove();
  }  
  removeNull(object) {
    for (let key in object) {
      let value = object[key];
      if (!value) delete object[key];
    }
    return object;
  }
}
