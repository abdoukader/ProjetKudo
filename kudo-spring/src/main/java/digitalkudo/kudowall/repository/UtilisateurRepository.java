package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
    List<Utilisateur> findAll();
    Optional<Utilisateur> findByUsername(String username);
    Utilisateur findByNom(String nom);
    Utilisateur findByStructure(Long structure);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}
