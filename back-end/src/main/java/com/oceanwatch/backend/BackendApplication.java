package com.oceanwatch.backend;

import com.oceanwatch.model.Species;
import com.oceanwatch.repository.SpeciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.oceanwatch.repository")
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BackendApplication {

    @Autowired
    private SpeciesRepository speciesRepository;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @GetMapping("/species")
    public List<Species> getAllSpecies() {
        return speciesRepository.findAll();
    }

    @PostMapping("/species")
    public ResponseEntity<Species> addSpecies(@RequestBody Species species) {
        Species saved = speciesRepository.save(species);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @Bean
    CommandLineRunner loadData(SpeciesRepository repo) {
        return args -> {
            if (repo.count() > 0) return;
            repo.saveAll(Arrays.asList(
                new Species("Green Sea Turtle","Chelonia mydas","These gentle giants travel thousands of miles between feeding grounds and nesting beaches. They play a crucial role in maintaining healthy seagrass beds and coral reefs.","The green sea turtle is one of the largest sea turtles and the only herbivore among the different species. Green turtles are named for the greenish color of their cartilage and fat, not their shells. They can weigh up to 700 pounds and grow to about 4 feet in length.","Endangered","Reptiles","Tropical and subtropical oceans worldwide","Global","85,000 - 90,000 nesting females",Arrays.asList("Habitat loss","Bycatch in fishing gear","Poaching","Climate change","Pollution"),Arrays.asList("Protected nesting beaches","Fishing gear modifications","CITES regulations","Marine protected areas"),"seaturtle.png"),
                new Species("Blue Whale","Balaenoptera musculus","The largest animal ever known to exist on Earth, blue whales can reach lengths of over 100 feet. Their haunting songs can travel thousands of miles through the ocean.","The blue whale is the largest animal known to have ever existed. These magnificent marine mammals can reach lengths of more than 100 feet and weigh up to 200 tons. Their tongues alone can weigh as much as an elephant.","Endangered","Mammals","All major oceans except the Arctic","Global","10,000 - 25,000 individuals",Arrays.asList("Ship strikes","Entanglement","Ocean noise pollution","Climate change"),Arrays.asList("Whaling moratorium","Ship speed restrictions","Acoustic monitoring","Marine sanctuaries"),"blue_whale.png"),
                new Species("Scalloped Hammerhead","Sphyrna lewini","Known for their distinctive hammer-shaped heads, these sharks use their wide-set eyes to scan for prey. They often gather in large schools near seamounts.","The scalloped hammerhead shark is easily recognizable by its distinctive hammer shaped head with curved indentations along the front edge.","Critically Endangered","Fish","Tropical and warm temperate coastal waters","Atlantic, Pacific, Indian Oceans","Declined by over 80%",Arrays.asList("Overfishing for shark fins","Bycatch","Habitat degradation","Slow reproduction"),Arrays.asList("CITES Appendix II listing","Shark sanctuaries","Fin trade bans","Marine protected areas"),"hammerhead shark.png"),
                new Species("Staghorn Coral","Acropora cervicornis","Once the most abundant coral in the Caribbean, staghorn coral forms critical reef habitats. It can grow up to 2 inches per year under ideal conditions.","Staghorn coral is one of the most important reef-building corals in the Caribbean. Named for its characteristic antler-like branches, this fast-growing coral provides essential habitat for thousands of marine species.","Critically Endangered","Invertebrates","Caribbean Sea and western Atlantic Ocean","Caribbean","Declined by over 98% since 1980",Arrays.asList("Ocean warming","Ocean acidification","Disease outbreaks","Hurricanes","Pollution"),Arrays.asList("Coral nursery programs","Gene flow research","Water quality initiatives","Endangered Species Act"),"coral reef.png"),
                new Species("Southern Sea Otter","Enhydra lutris nereis","These charismatic mammals are keystone species that help maintain healthy kelp forest ecosystems. They have the densest fur of any animal on Earth.","The southern sea otter is a keystone species of the near-shore marine ecosystem along the central California coast. Unlike most marine mammals, sea otters lack a layer of blubber and rely on incredibly dense fur.","Endangered","Mammals","Coastal waters of the eastern North Pacific","North Pacific","Approximately 3,000 individuals",Arrays.asList("Oil spills","Shark predation","Disease","Entanglement","Habitat degradation"),Arrays.asList("Marine Mammal Protection Act","Oil spill protocols","Rescue centers","Kelp restoration"),"sea_otter_floating.png"),
                new Species("Giant Oceanic Manta Ray","Mobula birostris","The largest rays in the world, with wingspans reaching up to 29 feet. They are known for their intelligence and gentle nature around divers.","The giant oceanic manta ray is the world's largest ray species, with wingspans that can exceed 29 feet. These gentle giants possess the largest brain of any fish and are capable of self-recognition.","Vulnerable","Fish","Tropical and subtropical waters worldwide","Global","Unknown, declining",Arrays.asList("Fishing for gill plates","Bycatch","Ghost nets","Habitat degradation","Climate change"),Arrays.asList("CITES protection","Tourism programs","Marine protected areas","Trade bans"),"manta_ray.png")
            ));
            System.out.println("Species loaded.");
        };
    }
}