package digitalkudo.kudowall.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import digitalkudo.kudowall.model.*;
import digitalkudo.kudowall.model.Role;
import digitalkudo.kudowall.model.Structure;
import digitalkudo.kudowall.model.Utilisateur;
import digitalkudo.kudowall.repository.RoleRepository;
import digitalkudo.kudowall.repository.StructureRepository;
import digitalkudo.kudowall.repository.KudoPointRepository;
import digitalkudo.kudowall.repository.UtilisateurRepository;
import digitalkudo.kudowall.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;



@CrossOrigin("http://localhost:8100")
@RestController
@RequestMapping(value = "/add", method = RequestMethod.POST)
public class UtilisateurController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Autowired
    private StructureRepository structureRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private KudoPointRepository kudoPointRepository;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    PasswordEncoder encoder;

    @PostMapping(value = "/user")
    public Utilisateur addUser(@RequestBody(required = false) Utilisateur u) {
        Utilisateur user = new Utilisateur(u.getNom(), u.getEmail(), u.getTelephone(), u.getUsername(),
                encoder.encode(u.getPassword()),u.getNbrekudo(),u.getNbrepoint());

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
        u.setPassword(encoder.encode(u.getPassword()));
        u.setRoles(roles);
        u.setNbrekudo(0);
        u.setNbrepoint(0);
        return utilisateurRepository.save(u);
    }

    @GetMapping(value = "/liste-user")
    //@PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Utilisateur> users(@RequestBody (required = false) Utilisateur utilisateur){

        return utilisateurRepository.findAll();
    }

    @PostMapping(value = "/structure")
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure addStructure(@RequestBody(required = false) Structure s){
        Structure structure = new Structure(s.getDepartement(),s.getSousStructure(),s.getLieu());

        return structureRepository.save(s);
    }

   @GetMapping(value = "/liste-structures")
    //@PreAuthorize("hasAnyAuthority('ROLE_USER')")
          public List <Structure> structures (@RequestBody(required = false) Structure structures){

       return  structureRepository.findAll();
    }

    @GetMapping(value = "/liste-structure/{id}")
    public Structure lister(@PathVariable long id) throws Exception {
        Structure structure = structureRepository.findById(id).orElseThrow(
                ()->new Exception("Cette structure n'existe pas !")
        );
        return structure;
    }
    @GetMapping(value = "listekudopoint")
    //@PreAuthorize("hasAnyAuthority('ROLE_USER')")
    public List <KudoPoint> kudoPoints (@RequestBody(required = false)KudoPoint kudoPoint){

        return  kudoPointRepository.findAll();
    }


    public Date datefrom;
    public String dateTo;
    /*@GetMapping(value = "/kudodetails")
    public Kudo details(@RequestBody(required = false) Kudo kudos) throws ParseException {
    Kudo user = new Kudo(kudos.getUtilisateur().getNom());
        Date sdf = new SimpleDateFormat("yyyy/MM/dd").parse(String.valueOf(datefrom));
        return user;
    }*/
    @PostMapping(value = "/update-structure/{id}")
    //@PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Structure updatestructure(@RequestBody Structure structure,@PathVariable Long id) throws Exception{
        structure.setId(id);
        Structure structure1=structureRepository.findStructureById(id).orElseThrow(
                ()->new Exception("La structure avec l'id "+id+" n'existe pas !")
        );
        structureRepository.save(structure);
        return structure;
    }

}

