import { UserAlbumsService } from './../../shared/services/user-albums.service';
import { Album } from '../../shared/models/album';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input('key') key: string;
  @Input('album') album: Album;
  
  constructor(private userAlbumsService: UserAlbumsService) { }

  ngOnInit() {
  }

  deleteAlbum(albumsId) {
    if(!confirm('Bạn chắc chắn muốn xóa khóa học này ?')) return;
    this.userAlbumsService.delete(albumsId);
  }

}
