package digitalkudo.kudowall.controller;

import digitalkudo.kudowall.model.*;
import digitalkudo.kudowall.repository.*;
import digitalkudo.kudowall.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping(value = "/kudo",method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE })
public class KudoWallController<id> {
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Autowired
    private KudoPointRepository kudoPointRepository;
    @Autowired
    private KudoRepository kudoRepository;
    @Autowired
    private UserDetailsServiceImpl UserDetailsService;

    @Autowired
    private StructureRepository structureRepository;

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping(value = "/kudopoint")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public KudoPoint kudopoint(@RequestBody(required = false) KudoPoint kudoPoint) {
        kudoPoint.getLibelle();
        kudoPoint.getPoint();
        return kudoPointRepository.save(kudoPoint);
    }

    @CrossOrigin("http://localhost:8100")
    @PostMapping(value = "/personne")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Message kudoPersonne(@RequestBody(required = false) KudoWall kw) throws Exception {
        int compareTo;
        //recup info emmetteur
        Utilisateur user = UserDetailsService.getUserConnect();
//        if(user.getRoles() != 'ROLE_USER'){
//            throw new Exception("votre role d'amin ne vous permet pas d'effectuer cette requête");
//        }
        //instanciation objet Kudo
        Kudo kudo = new Kudo();

        //edition Date
        kudo.setDatekudo(new Date());

        //recup saisi
        kudo.setNombeneficiaire(kw.getNombeneficiaire());
        kudo.setCommentaire(kw.getCommentaire());

        //recup info emetteur
        kudo.setUtilisateur(user);

        //verifier si beneficiaire est dans la base
        Utilisateur beneficiaire = utilisateurRepository.findByNom(kw.getNombeneficiaire());
        if (beneficiaire == null) {
            throw new Exception("Cet utilisateur n\'est pas inscrit");
        }
        //verifier si le beneficiaire n'est pas l'émetteur
        if (user.getNom().compareTo(beneficiaire.getNom()) == 0) {
            throw new Exception("vous ne pouvez pas être le bénéficiaire du kudo que vous émettez " + user.getNom() + "!");
        } else {

            //recup point kudo
            KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());

            //recup point kudo
            Integer point = pointkudo.getPoint();
            kudo.setKudoPoint(pointkudo);

            //recup point beneficiaire
            Integer points = beneficiaire.getNbrepoint();

            //affecter point à beneficiaire
            beneficiaire.setNbrepoint(points + point);

            //recup kudos emmetteur
            Integer kudos = user.getNbrekudo();

            //affectation nbre kudo à l'emmetteur
            user.setNbrekudo(kudos + 1);

            utilisateurRepository.save(beneficiaire);
            utilisateurRepository.save(user);
            kudoRepository.save(kudo);
            String msg = "Felicitation " + user.getNom() + "  vous venez de faire un kudo à " + beneficiaire.getNom();
            Message message = new Message(200, msg);
            return message;
        }

    }

    @CrossOrigin("http://localhost:8100")
    @GetMapping(value = "/liste")
    public List<Kudo> kudos(@RequestBody(required = false) Kudo Kudo) {
        return kudoRepository.findAll();
    }


    @CrossOrigin("http://localhost:8100")
    @PostMapping(value = "/team")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String kudoTeam(@RequestBody(required = false) KudoWall kw) throws Exception {
        Utilisateur user = UserDetailsService.getUserConnect();
        Kudo kudo = new Kudo();
        kudo.setDatekudo(new Date());
        kudo.setCommentaire(kw.getCommentaire());
        kudo.setNombeneficiaire(kw.getNombeneficiaire());
        kudo.setUtilisateur(user);

        Utilisateur teambeneficiaire = utilisateurRepository.findByNom(kw.getNombeneficiaire());
        if (teambeneficiaire == null) {
            Utilisateur team = new Utilisateur();
            team.setNom(team.getNom());
            team.setNbrepoint(0);

            Structure s = structureRepository.findById(team.getStructure()).get();
            Set<Structure> structure = new HashSet<>();
            List<Structure> structures = new ArrayList<>();
            structures = structureRepository.findAll();
            if (!structures.isEmpty()) {
                structures.forEach(Structure -> {
                    if (team.getStructure().equals(Structure.getId())) {
                        Structure.setId(Structure.getId());
                    }
                });
            }
            structure.add(s);
            team.setStructures(structure);

            Role role = new Role();
            Role role1 = roleRepository.findById(2);//ROLE_USER
            Set<Role> roles = new HashSet<>();
            roles.add(role1);
            team.setRoles(roles);
        }
            //recup point kudo
            KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());

            //recup point kudo
            Integer point = pointkudo.getPoint();
            kudo.setKudoPoint(pointkudo);

            //recup point beneficiaire
            Integer points = teambeneficiaire.getNbrepoint();

            //affecter point à beneficiaire
            teambeneficiaire.setNbrepoint(points + point);

            //recup kudos emmetteur
            Integer kudos = user.getNbrekudo();

            //affectation nbre kudo à l'emmetteur
            user.setNbrekudo(kudos + 1);


        String msg = "Felicitation " + user.getNom() + "  vous venez de faire un kudos à  la team " + teambeneficiaire.getNom();
        Message message = new Message(200, msg);

        utilisateurRepository.save(user);
        utilisateurRepository.save(teambeneficiaire);
        kudoRepository.save(kudo);
        return msg;
    }

}



//        else {
//
//            //recup point kudo
//            KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());
//
//            //recup point kudo
//            Integer point = pointkudo.getPoint();
//            kudo.setKudoPoint(pointkudo);
//
//            //recup point beneficiaire
//            Integer points = teambeneficiaire.getNbrepoint();
//
//            //affecter point à beneficiaire
//            teambeneficiaire.setNbrepoint(points + point);
//
//            //recup kudos emmetteur
//            Integer kudos = user.getNbrekudo();
//
//            //affectation nbre kudo à l'emmetteur
//            user.setNbrekudo(kudos + 1);
//
//        }
//            String msg = "Felicitation " + user.getNom() +"    vous venez de faire un kudos à  "  + teambeneficiaire.getNom();
//            Message message = new Message(200, msg);
//
//            utilisateurRepository.save(user);
//            utilisateurRepository.save(teambeneficiaire);
//            kudoRepository.save(kudo);
//            return msg;
//    }








