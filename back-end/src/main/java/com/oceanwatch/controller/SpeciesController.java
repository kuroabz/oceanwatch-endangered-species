package com.oceanwatch.controller;

import com.oceanwatch.model.Species;
import com.oceanwatch.repository.SpeciesRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/species")
@CrossOrigin(origins = "http://localhost:5174")
public class SpeciesController {

    private final SpeciesRepository speciesRepository;

    public SpeciesController(SpeciesRepository speciesRepository) {
        this.speciesRepository = speciesRepository;
    }

    @GetMapping
    public ResponseEntity<List<Species>> getAllSpecies() {
        return ResponseEntity.ok(speciesRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Species> getSpeciesById(@PathVariable String id) {
        return speciesRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}