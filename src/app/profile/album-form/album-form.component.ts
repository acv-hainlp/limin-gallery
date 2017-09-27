import { UserAlbumsService } from './../../shared/services/user-albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {

  constructor(private userAlbumsService: UserAlbumsService) { }

  ngOnInit() {
  }

  save(newAlbum) {
    this.userAlbumsService.create(newAlbum); 
  }

}
