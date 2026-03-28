package com.oceanwatch.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "species")
public class Species {

    @Id
    private String id;
    private String name;
    private String scientificName;
    private String description;
    private String fullDescription;
    private String status;
    private String category;
    private String habitat;
    private String region;
    private String population;
    private List<String> threats;
    private List<String> conservation;
    private String image;

    public Species() {}

    public Species(String name, String scientificName, String description, String fullDescription,
                   String status, String category, String habitat, String region,
                   String population, List<String> threats, List<String> conservation, String image) {
        this.name = name;
        this.scientificName = scientificName;
        this.description = description;
        this.fullDescription = fullDescription;
        this.status = status;
        this.category = category;
        this.habitat = habitat;
        this.region = region;
        this.population = population;
        this.threats = threats;
        this.conservation = conservation;
        this.image = image;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getScientificName() { return scientificName; }
    public void setScientificName(String n) { this.scientificName = n; }
    public String getDescription() { return description; }
    public void setDescription(String d) { this.description = d; }
    public String getFullDescription() { return fullDescription; }
    public void setFullDescription(String d) { this.fullDescription = d; }
    public String getStatus() { return status; }
    public void setStatus(String s) { this.status = s; }
    public String getCategory() { return category; }
    public void setCategory(String c) { this.category = c; }
    public String getHabitat() { return habitat; }
    public void setHabitat(String h) { this.habitat = h; }
    public String getRegion() { return region; }
    public void setRegion(String r) { this.region = r; }
    public String getPopulation() { return population; }
    public void setPopulation(String p) { this.population = p; }
    public List<String> getThreats() { return threats; }
    public void setThreats(List<String> t) { this.threats = t; }
    public List<String> getConservation() { return conservation; }
    public void setConservation(List<String> c) { this.conservation = c; }
    public String getImage() { return image; }
    public void setImage(String i) { this.image = i; }
}