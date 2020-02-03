package digitalkudo.kudowall.services;

import digitalkudo.kudowall.model.Utilisateur;
import digitalkudo.kudowall.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UtilisateurRepository utilisateurRepository;
    private Utilisateur userConnect;

    @Override
    public UserPrinciple loadUserByUsername(String username) throws UsernameNotFoundException {

        Utilisateur utilisateur = utilisateurRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email : " + username));

        return UserPrinciple.build(utilisateur);
    }
    public Utilisateur getUserConnect(){ return userConnect ;}
}
