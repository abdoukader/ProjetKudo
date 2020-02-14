package digitalkudo.kudowall.controller;

import digitalkudo.kudowall.model.*;
import digitalkudo.kudowall.repository.KudoPointRepository;
import digitalkudo.kudowall.repository.KudoRepository;
import digitalkudo.kudowall.repository.StructureRepository;
import digitalkudo.kudowall.repository.UtilisateurRepository;
import digitalkudo.kudowall.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

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
        int compareTo;
        //recup info emmetteur
        Utilisateur user = UserDetailsService.getUserConnect();

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

        if (user.getNom().compareTo(beneficiaire.getNom()) == 0) 
        {
            throw new Exception("vous ne pouvez pas être le bénéficiaire du kudo que vous émettez !" + user.getNom());
        } else {

            //recup point kudo
            KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());

            //recup point kudo
            Integer point = pointkudo.getPoint();
            kudo.setKudoPoint(pointkudo);

            //recup point beneficiaire
            Integer points = beneficiaire.getNbrepoint((long) 0);

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
            Message message = new Message(200,msg);
            return message;
        }
    }
    @PostMapping(value = "/team")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Message kudoTeam(@RequestBody(required = false) KudoWall kw) throws Exception {
        Utilisateur user = UserDetailsService.getUserConnect();
        Kudo kudo = new Kudo();
        kudo.setDatekudo(new Date());
        kudo.setNombeneficiaire(kw.getNombeneficiaire());
        kudo.setCommentaire(kw.getCommentaire());
        kudo.setUtilisateur(user);
        Utilisateur teamBeneficiaire = utilisateurRepository.findByNom(kw.getNombeneficiaire());
        if (teamBeneficiaire == null){
            throw new Exception("cette team n\'existe pas");
        }
        else{
                KudoPoint pointkudo = kudoPointRepository.findByPoint(kw.getPoint());
                Integer point = pointkudo.getPoint();
                kudo.setKudoPoint(pointkudo);
                teamBeneficiaire.setNbrepoint(teamBeneficiaire.getNbrepoint((long) 0) + point);
                user.setNbrekudo(user.getNbrekudo() + 1);

        utilisateurRepository.save(teamBeneficiaire);
        utilisateurRepository.save(user);
        kudoRepository.save(kudo);
        String msg = "Felicitation " + user.getNom() + "  vous venez de faire un kudo à la team" + teamBeneficiaire.getNom();
        Message message = new Message(200,msg);
        return message;
    }

    }
}
