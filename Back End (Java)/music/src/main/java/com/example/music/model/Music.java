package com.example.music.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "music")
public class Music {
        
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name="track_id")
            private Long trackId;
        
        @Column(name="track_name")
        private String trackName;
        
        @Column(name="artist_name")
        private String artistName;
        
        @Column(name="duration")
        private int duration;

public Long getTrackId() {
	return trackId;
}
public void setTrackId(Long id) {
	this.trackId = id;
}
        
public String getTrackName() {
	return trackName;
}
public void setTrackName(String trackName) {
	this.trackName = trackName;
}

public String getArtistName() {
	return artistName;
}

public void setArtistName(String artistName) {
	this.artistName = artistName;
}

public int getDuration() {
	return duration;
}

public void setDuration(int duration) {
	this.duration = duration;
}
}