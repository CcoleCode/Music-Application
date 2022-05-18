import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMusicComponent } from './list-music/list-music.component';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  @ViewChild(ListMusicComponent)
  listMusic! : ListMusicComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
