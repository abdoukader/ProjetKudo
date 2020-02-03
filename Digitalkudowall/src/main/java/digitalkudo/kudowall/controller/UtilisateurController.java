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
        user.setNbrekudo(null);

        return utilisateurRepository.save(user);
    }

    @PostMapping(value = "/addStructure", consumes = { MediaType.APPLICATION_JSON_VALUE})
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure addStructure(@RequestBody(required = false) Structure s){
        Structure structure = new Structure(s.getDepartement(),s.getSousStructure(),s.getLieu());

        return structureRepository.save(s);
    }
}
