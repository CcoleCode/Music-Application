import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Track } from './track.model';

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {
  

  readonly baseApiUrl = "http://localhost:8080/music";
  subjectNotifier : Subject<null> = new Subject<null>();


  constructor(private http : HttpClient) { }

getAllMusic() : Observable<Track[]> {
 
  return this.http.get<Track[]>(this.baseApiUrl + "/tracks");
}

postMusic(data : Track) {
 return this.http.post(this.baseApiUrl + "/tracks", data);
}

deleteMusic(id : number) {
  return this.http.delete(this.baseApiUrl + `/track/${id}`);
}

getMusicById(id : number): Observable <Track> {
  return this.http.get<Track>(this.baseApiUrl + `/track/${id}`);
}

putMusic(id : number, data : Track) {
  return this.http.put(this.baseApiUrl + `/track/${id}`, data);
}

notifyChange() {
  this.subjectNotifier.next(null);
}
}
