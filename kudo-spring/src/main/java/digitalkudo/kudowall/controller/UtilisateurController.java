package digitalkudo.kudowall.controller;

import digitalkudo.kudowall.model.Message;
import digitalkudo.kudowall.model.Role;
import digitalkudo.kudowall.model.Structure;
import digitalkudo.kudowall.model.Utilisateur;
import digitalkudo.kudowall.repository.RoleRepository;
import digitalkudo.kudowall.repository.StructureRepository;
import digitalkudo.kudowall.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;
import java.util.*;

@RestController
@RequestMapping(value = "/user", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE })
public class UtilisateurController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private StructureRepository structureRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Transactional
    @PostMapping(value = "/add/personne")
    public Message Add(@RequestBody(required = false) Utilisateur u) {
        Utilisateur user = new Utilisateur(u.getNom(), u.getEmail(), u.getTelephone(), u.getUsername(),
                encoder.encode(u.getPassword()),u.getNbrekudo(),u.getNbrepoint((long) 0));

        Structure s =structureRepository.findById(u.getStructure()).get();
        Set<Structure> structure = new HashSet<>();
        List<Structure> structures = new ArrayList<>();
        structures = structureRepository.findAll();
        if (!structures.isEmpty()){
            structures.forEach(Structure ->{
                if (u.getStructure().equals(Structure.getId())){
                    Structure.setId(Structure.getId());
                }
            });
        }
        structure.add(s);
        u.setStructures(structure);

        Role role = new Role();
        Role role1 =roleRepository.findById(2);//ROLE_USER
        Set<Role> roles = new HashSet<>();
        roles.add(role1);
        u.setRoles(roles);
        u.setPassword(encoder.encode(u.getPassword()));
        u.setNbrekudo(0);
        u.setNbrepoint(0);
        String msg = "Félicitation vous êtes inscrit au Digitalkudowall";
        Message message = new Message(200,msg);
        utilisateurRepository.save(u);
        return message;
    }

   /* @PostMapping(value = "/add/team")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Message Team(@RequestBody(required = false) Utilisateur team){
        Utilisateur utilisateur = new Utilisateur(team.getNom(),team.getNbrepoint((long) 0));
        String nomteam = "teamate";
        Random rand = new Random();
        Structure s =structureRepository.findById(team.getStructure()).get();
        Set<Structure> structure = new HashSet<>();
        List<Structure> structures = new ArrayList<>();
        structures = structureRepository.findAll();
        if (!structures.isEmpty()){
            structures.forEach(Structure ->{
                if (team.getStructure().equals(Structure.getId())){
                    Structure.setId(Structure.getId());
                }
            });
        }
        structure.add(s);
        team.setStructures(structure);
        String msg = "Félicitation vous êtes inscrit au Digitalkudowall";
        team.setNbrepoint(0);
        Message message = new Message(200,msg);
        utilisateurRepository.save(team);
        return message;

    }*/

    @GetMapping(value = "/liste")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Utilisateur> users(@RequestBody (required = false) Utilisateur utilisateur){

        return utilisateurRepository.findAll();
    }

    @PostMapping(value = "/add-structure")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure addStructure(@RequestBody(required = false) Structure s){
        Structure structure = new Structure(s.getDepartement(),s.getSousStructure(),s.getLieu());

        return structureRepository.save(s);
    }
    @PostMapping(value = "/update-structure/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure updatestructure(@RequestBody Structure structure,@PathVariable Long id) throws Exception{
        structure.setId(id);
        Structure structure1=structureRepository.findStructureById(id).orElseThrow(
                ()->new Exception("La structure avec l'id "+id+" n'existe pas !")
        );
        structureRepository.save(structure);
        return structure;
    }

   @GetMapping(value = "/liste-structure")
    @PreAuthorize("hasAnyAuthority('ROLE_USER')")
          public List <Structure> structures (@RequestBody(required = false) Structure structures){

       return  structureRepository.findAll();
    }

}

