package com.example.music.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.music.model.Music;
import com.example.music.service.MusicService;

@RestController
@RequestMapping("/music")
public class MusicController {
        @Autowired
        MusicService trackService;
        
        @CrossOrigin(origins = "*") 
        @PostMapping("/tracks")
        public Music createTrack(@RequestBody Music tracks) {
            return trackService.createTrack(tracks);
        }

        @CrossOrigin(origins = "*") 
        @GetMapping("/tracks")
        public List<Music> readTracks() {
            return trackService.getTracks();
        }
        
        @CrossOrigin(origins = "*") 
        @GetMapping("/tracks/template")
        public String templateEmployees(Model model) {
        	
            model.addAttribute("tracks", trackService.getTracks());
            return "tracks";
        }

        @CrossOrigin(origins = "*") 
        @PutMapping("/tracks/{trackId}")
        public Music readTracks(@PathVariable(value = "trackId") Long id, @RequestBody Music trackDetails) {
            return trackService.updateMusic(id, trackDetails);
        }

        @CrossOrigin(origins = "*") 
        @DeleteMapping("/tracks/{trackId}")
        public void deleteMusic(@PathVariable(value = "trackId") Long id) {
            trackService.deleteMusic(id);
        }
        
       /* @PatchMapping("/tracks/{trackId}/{trackName}")
        public Music updateTracks(@PathVariable(value = "trackId", "trackName", method = RequestMethod.PATCH) Long id, String trackName @RequestBody Music trackName) {
            return trackService.updateMusic(id, trackName);
        }*/
}
