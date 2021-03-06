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
@CrossOrigin("http://localhost:8100")
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

    @PostMapping(value = "/personne")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Message kudoPersonne(@RequestBody(required = false) KudoWall kw) throws Exception {
        Utilisateur user = UserDetailsService.getUserConnect();
        Kudo kudo = new Kudo();
        kudo.setDatekudo(new Date());
        kudo.setNombeneficiaire(kw.getNombeneficiaire());
        kudo.setCommentaire(kw.getCommentaire());
        //Optional<Structure> structurebeneficiaire = structureRepository.findById(kw.getStructure());
        kudo.setUtilisateur(user);
        String exception1 = "Cet utilisateur n\'est pas inscrit";
        String exception2 = "vous ne pouvez pas être le bénéficiaire du kudo que vous émettez " + user.getNom() + "!";
        Utilisateur beneficiaire = utilisateurRepository.findByNom(kw.getNombeneficiaire());
        //List<Utilisateur> beneficiaireStruc = utilisateurRepository.findByStructure(kw.getStructure());
        if (beneficiaire == null) {
            Message InvalidCredential = new Message(500,exception1,"","","");
            return InvalidCredential;
        }else if (user.getNom().compareTo(beneficiaire.getNom()) == 0 ) {
            Message AbnormalOperation = new Message(500,exception2,"" ,"","");
            return AbnormalOperation;
        } else {
            //if( user.getStructures().equals(beneficiaireStruc.getStructures()) == false)
            KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());
            Integer point = pointkudo.getPoint();
            kudo.setKudoPoint(pointkudo);
            Integer points = beneficiaire.getNbrepoint();
            beneficiaire.setNbrepoint(points + point);
            Integer nbrekudo = user.getNbrekudo();
            user.setNbrekudo(nbrekudo + 1);
            Integer kudosrecu = beneficiaire.getKudos();
            beneficiaire.setKudos(kudosrecu + 1);
            utilisateurRepository.save(beneficiaire);
            utilisateurRepository.save(user);
            kudoRepository.save(kudo);
            String msg = "Felicitation vous venez de faire un kudo à " + beneficiaire.getNom();
            Message message = new Message(200, msg,beneficiaire.getNom(),kw.getCommentaire(),user.getNom());
            return message;
        }

    }

    @GetMapping(value = "/liste")
    public List<Kudo> kudos(@RequestBody(required = false) Kudo Kudo) {
        return kudoRepository.findAll();
    }

    @GetMapping(value = "/liste-kudo/{id}")
    public Kudo lister(@PathVariable long id) throws Exception {
        Kudo kudo = kudoRepository.findById(id).orElseThrow(
                ()->new Exception("Aucun kudo ne correspond à cet id !")
        );
        return kudo;
    }


    @GetMapping(value = "/liste-kudos-service/{id}")
    public List<Kudo> listeKudosStructure(@PathVariable Long  id){
        return structureRepository
                .findStructureById(id)
                .map(structure -> {
                    Set<Structure> structures = new HashSet<>();
                    structures.add(structure);
                    List<Kudo> kudos= kudoRepository.findAllByUtilisateurIn(utilisateurRepository
                            .findByStructuresIn(Collections.singletonList(structure)));
                    if (structures.isEmpty()){
                        return null;
                    }
                    else {
                        return kudos;
                    }
                })

                .orElse(new ArrayList<>());}


    @CrossOrigin("http://localhost:8100")
    @PostMapping(value = "/team")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Message kudoTeam(@RequestBody(required = false) KudoWall kw) throws Exception {
        Utilisateur user = UserDetailsService.getUserConnect();
        Utilisateur team = new Utilisateur();
        Message sms = new Message();
        Kudo kudo = new Kudo();
        kudo.setDatekudo(new Date());
        kudo.setCommentaire(kw.getCommentaire());
        kudo.setNombeneficiaire(kw.getNombeneficiaire());
        Optional<Structure> structureteam = structureRepository.findById(kw.getStructure());
        kudo.setUtilisateur(user);

        Utilisateur teambeneficiaire = utilisateurRepository.findByNomTeam(kw.getNombeneficiaire());
        if (teambeneficiaire != null) {
            KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());
            Integer point = pointkudo.getPoint();
            kudo.setKudoPoint(pointkudo);

            Integer points = teambeneficiaire.getNbrepointTeam();
            teambeneficiaire.setNbrepoint(points + point);
            Integer kudos = user.getNbrekudo();
            user.setNbrekudo(kudos + 1);
            Integer kudosrecutaem = teambeneficiaire.getKudos();
            teambeneficiaire.setKudos(kudosrecutaem + 1);

            String msg = "Felicitation vous venez de faire un kudos à  la team " + teambeneficiaire.getNom();
            Message message = new Message(200, msg,teambeneficiaire.getNom(),kw.getCommentaire(),user.getNom());
            utilisateurRepository.save(user);
            utilisateurRepository.save(teambeneficiaire);
            kudoRepository.save(kudo);
            return message;

        } else {
            Utilisateur teamate = new Utilisateur();
            teamate.setNomTeam(kw.getNombeneficiaire());
            teamate.setNbrepointTeam(0);
            KudoPoint pointdukodo = kudoPointRepository.findByPoint(kw.getPoint());
            Integer point = pointdukodo.getPoint();
            kudo.setKudoPoint(pointdukodo);
            teamate.setNbrepointTeam(pointdukodo.getPoint());
            teamate.setKudos(1);

            utilisateurRepository.save(teamate);
            sms.setNombeneficiaire(teamate.getNom());
            sms.setCommentaire(kw.getCommentaire());
            sms.setNom_emetteur(user.getNom());
        }
        utilisateurRepository.save(user);
        kudoRepository.save(kudo);
        String msg = "Felicitation " +user.getNom()+  "  votre kudos a été enregisté avec succès" ;
        //Message message = new Message(200, msg,teamate.getNom(),kw.getCommentaire());
        return sms;
    }

}
