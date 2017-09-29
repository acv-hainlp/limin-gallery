import { UserAlbumsService } from '../shared/services/user-albums.service';
import { Album } from './../shared/models/album';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { User } from './../shared/models/user';
import { Subscription, Observable } from 'rxjs/Rx';
import { AuthService } from './../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  closeResult: string;
  userAlbums = []; //save key in here
  userData$: User;
  subscription$: Subscription;
  constructor(private modalService: NgbModal, private userService: UserService, private authService: AuthService) {
      this.subscription$ = authService.user$.subscribe(user =>{
        userService.getAllUserData(user.uid).subscribe(userData => {
          this.userData$ = userData;
          if (userData.albums) this.userAlbums = Object.keys(userData.albums); // save all key to variable
        });
    }) 
   }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

//   generateArray(obj){
//     return Object.keys(obj).map((key)=>{ return obj[key]});
//  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription$.unsubscribe();
  }
}
