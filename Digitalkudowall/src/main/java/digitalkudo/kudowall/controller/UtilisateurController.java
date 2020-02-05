package digitalkudo.kudowall.controller;

import digitalkudo.kudowall.model.Structure;
import digitalkudo.kudowall.model.Utilisateur;
import digitalkudo.kudowall.repository.StructureRepository;
import digitalkudo.kudowall.repository.UtilisateurRepository;
import digitalkudo.kudowall.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(value = "/user", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE })
public class UtilisateurController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private StructureRepository structureRepository;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    PasswordEncoder encoder;

    @PostMapping(value = "/addUser")
    public Utilisateur addUser(@RequestBody(required = false) Utilisateur u) {
        Utilisateur user = new Utilisateur(u.getNom(), u.getEmail(), u.getTelephone(), u.getUsername(),
                encoder.encode(u.getPassword()),u.getNbrekudo(),u.getNbrepoint());
        Structure s =structureRepository.findStructureById(1).orElseThrow();

          Set<Structure> structures = new HashSet<>();
          structures.add(s);
          u.setStructures(structures);
          user.setNbrekudo(null);
          user.setNbrepoint(null);
        return utilisateurRepository.save(u);
    }

    @GetMapping(value = "/showUsers")
    //@PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Utilisateur> users(@RequestBody (required = false) Utilisateur utilisateur){

        return utilisateurRepository.findAll();
    }

    @PostMapping(value = "/addStructure")
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure addStructure(@RequestBody(required = false) Structure s){
        Structure structure = new Structure(s.getDepartement(),s.getSousStructure(),s.getLieu());

        return structureRepository.save(s);
    }
    @PostMapping(value = "/updatestructure/{id}")
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure updatestructure(@RequestBody Structure
 structure,@PathVariable int id) throws Exception{
        structure.setId(id);
        Structure structure1=structureRepository.findStructureById(id).orElseThrow(
                ()->new Exception("La structure avec l'id "+id+" n'existe pas !")
        );
        structureRepository.save(structure);
        return structure;
    }

   @GetMapping(value = "/showstructures")
    //@PreAuthorize("hasAnyAuthority('ROLE_USER')")
          public List <Structure> structures (@RequestBody(required = false) Structure structures){

       return  structureRepository.findAll();
    }


}

