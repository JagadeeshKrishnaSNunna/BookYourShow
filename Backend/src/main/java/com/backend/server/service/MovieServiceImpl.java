package com.backend.server.service;

import com.backend.server.Model.Movies;
import com.backend.server.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieServiceImpl implements MovieService{

    @Autowired
    MovieRepository movieRepository;
    @Override
    public List<Movies> getAllMovies() {
        List<Movies> movies=movieRepository.findAll();

        System.out.println(movies.size());
        return movies;
    }

    @Override
    public List<Movies> addAllMovies(List<Movies> movies) {
        return movieRepository.saveAll(movies);
    }

    @Override
    public Movies addMovie(Movies movie) {
        Movies mv=movieRepository.save(movie);
        return mv;
    }

    @Override
    public List<Movies> findByStatus(String status) {
        List<Movies> movies=movieRepository.findByStatus(status);
        System.out.println(movies.size());
        return movies;
    }
}
