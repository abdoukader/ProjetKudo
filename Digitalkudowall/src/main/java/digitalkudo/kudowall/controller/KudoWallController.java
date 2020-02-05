package digitalkudo.kudowall.controller;

import digitalkudo.kudowall.model.Kudo;
import digitalkudo.kudowall.model.KudoPoint;
import digitalkudo.kudowall.model.Utilisateur;
import digitalkudo.kudowall.repository.KudoPointRepository;
import digitalkudo.kudowall.repository.KudoRepository;
import digitalkudo.kudowall.repository.UtilisateurRepository;
import digitalkudo.kudowall.services.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/kudo",method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE })
public class KudoWallController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    private Utilisateur utilisateur;
    @Autowired
    private KudoPointRepository kudoPointRepository;
    private KudoPoint kudoPoint;
    @Autowired
    private KudoRepository kudoRepository;
    private UserDetailsServiceImpl UserDetailsService;

    @PostMapping(value = "/kudopoint", consumes = {MediaType.APPLICATION_JSON_VALUE})
    //@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public KudoPoint kudoPoint(@RequestBody(required = false) KudoPoint kp) {

        return kudoPointRepository.save(kp);
    }

   /* @PostMapping(value = "/addKudo")
    public Kudo addKudo(@RequestBody(required = false) Kudo k){
        //recup saisi
        k.setDatekudo(new Date());
        k.getNombeneficiaire();
        k.getCommentaire();
        //verifier si beneficiaire est dans la base
        List<Kudo> beneficiaire = kudoRepository.findByNombeneficiaire(k.getNombeneficiaire());
        //recup info emmetteur
        Utilisateur user = UserDetailsService.getUserConnect();
        //affectation kudo à emmetteur
        user.setNbrekudo(user.getNbrekudo() + 1);
        //recup point kudo
        Optional <KudoPoint> kp = kudoPointRepository.findOneById(kudoPoint.getPoint());
        //creation objet Utilisateur
        Utilisateur utilisateur = new Utilisateur();
        //affecter point à beneficiaire
        utilisateur.setNbrepoint(utilisateur.getNbrepoint() + kudoPoint.getPoint());

        //utilisateurRepository.save();
        return kudoRepository.save(k);

    }
*/
}

