package com.backend.server.service;

import com.backend.server.Model.Movies;

import java.util.List;

public interface MovieService {
    List<Movies> getAllMovies();
    List<Movies> addAllMovies(List<Movies> movies);

    Movies addMovie(Movies movie);

    List<Movies> findByStatus(String status);
}
