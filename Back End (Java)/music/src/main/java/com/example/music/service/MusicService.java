package com.example.music.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.music.model.Music;
import com.example.music.repository.MusicRepository;
import java.util.List;

@Service
public class MusicService {

        @Autowired
            MusicRepository trackRepository;        

//CREATE 
public Music createTrack(Music track) {
 return trackRepository.save(track);
}


//READ
public List<Music> getTracks() {
 return trackRepository.findAll();
}

//DELETE
public void deleteMusic(Long trackId) {
 trackRepository.deleteById(trackId);
}

//UPDATE
public Music updateMusic(Long trackId, Music trackDetails) {
     Music track = trackRepository.findById(trackId).get();
     track.setArtistName(trackDetails.getArtistName());
     track.setTrackName(trackDetails.getTrackName());
     track.setDuration(trackDetails.getDuration());
     
     return trackRepository.save(track);                                
}

//UPDATE
public Music updateTrackName(Long trackId, String trackName) {
	Music track = trackRepository.findById(trackId).get();
	track.setTrackName(trackName);
	
	return trackRepository.save(track);
}

}