import { Router } from '@angular/router';
import { Album } from './../../shared/models/album';
import { UserAlbumsService } from './../../shared/services/user-albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {
  newAction = true;

  selectedFiles: File; // :Filelist to save multi file

  constructor(private userAlbumsService: UserAlbumsService, private router: Router) { }

  ngOnInit() {
  }

  save(newAlbum : Album) {
    newAlbum.photo = this.selectedFiles; // this.selectedFiles.item(0) when use mutli file
    this.userAlbumsService.create(newAlbum);
    this.newAction = !this.newAction;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
}
