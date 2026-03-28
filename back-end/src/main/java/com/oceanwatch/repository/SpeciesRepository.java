package com.oceanwatch.repository;

import com.oceanwatch.model.Species;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpeciesRepository extends MongoRepository<Species, String> {
}