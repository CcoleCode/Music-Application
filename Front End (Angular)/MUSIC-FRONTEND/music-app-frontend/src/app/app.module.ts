import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { ListMusicComponent } from './music/list-music/list-music.component';
import { AddEditMusicComponent } from './music/add-edit-music/add-edit-music.component';
import { MusicApiService } from './music-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    ListMusicComponent,
    AddEditMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MusicApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
