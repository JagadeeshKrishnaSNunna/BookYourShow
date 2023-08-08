package com.backend.server.controller;

import com.backend.server.Model.Movies;
import com.backend.server.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieApis {

    @Autowired
    MovieService movieService;

    @GetMapping(value = "/getAllMovies",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Movies> getAllMovies(){

        return movieService.getAllMovies();
    }

    @GetMapping(value="/getByStatus") //TRENDING
    public List<Movies> getByStatus(@RequestParam String status){
        return movieService.findByStatus(status);
    }
    @PostMapping("/addAllMovies")
    public void saveAllMovies(@RequestBody List<Movies> movies){
        movieService.addAllMovies(movies);
    }
    @PostMapping("/addMovie")
    public Movies addMovie(@RequestBody Movies movie){
        return movieService.addMovie(movie);
    }
}
