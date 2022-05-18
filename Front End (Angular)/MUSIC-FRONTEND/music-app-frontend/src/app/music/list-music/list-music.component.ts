import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Track } from 'src/app/track.model';
import { MusicApiService } from 'src/app/music-api.service';


@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  musicList$! : Observable<Track[]>;

  track = new Track();

  notifyChange : Subscription=this.service.subjectNotifier.subscribe(notify => {
    this.musicList$ = this.service.getAllMusic();
  });

  constructor(private service : MusicApiService) { }

  ngOnInit(): void {
    this.musicList$ = this.service.getAllMusic();
  }
  ngOnDestroy(): void {
    this.notifyChange.unsubscribe();
  }

  deleteMusic(music : Track) {
    //You will have access to music object
    if(confirm(`Are you sure you want to delete music id ${music.trackId}?`)) {
      //Send the music.id to service delete method
      this.service.deleteMusic(music.trackId).subscribe(response =>{
        this.service.notifyChange();
    });
   
    }
  }

  editMusic(musicId : number) {
    this.service.getMusicById(musicId).subscribe(response => {
      this.track = response;
    });
  }


  updateMusic() {

    this.service.putMusic(this.track.trackId, this.track).subscribe(response => {

      this.service.notifyChange();
      const editMusicModalCloseBtn = document.getElementById("editmusicmodalclose");
      if (editMusicModalCloseBtn) {
        editMusicModalCloseBtn.click();
      }

    });

}


}

