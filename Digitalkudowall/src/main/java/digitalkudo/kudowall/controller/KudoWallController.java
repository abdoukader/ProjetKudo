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

@RestController
@RequestMapping(value = "/kudo",method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE })
public class KudoWallController {
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Autowired
    private KudoPointRepository kudoPointRepository;

    @Autowired
    private KudoRepository kudoRepository;

    private UserDetailsServiceImpl UserDetailsService;

    @PostMapping(value = "/kudopoint", consumes = {MediaType.APPLICATION_JSON_VALUE})
    //@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public KudoPoint kudoPoint(@RequestBody(required = false) KudoPoint kp){

        return kudoPointRepository.save(kp);
    }
    @PostMapping(value = "/addKudo", consumes = { MediaType.APPLICATION_JSON_VALUE})
    public Kudo addKudo(@RequestBody(required = false) Kudo kudo){
        Kudo k = new Kudo();
        //recup saisi
        k.setDatekudo(new Date());
        k.getNombeneficiare();
        k.getCommentaire();
        //recup point kudo
        KudoPoint kp = new KudoPoint();
        kp.getPoint();
        //recup info emmetteur
        Utilisateur user=UserDetailsService.getUserConnect();
        //affectation nombre kudo à emetteur
        user.setNbrekudo(user.getNbrekudo()+1);
        //kp.setNbrepoint(user.getNbrepoint()+k.getPoint());

        return kudoRepository.save(k);
    }

}
