package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Kudo;
import digitalkudo.kudowall.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface KudoRepository extends JpaRepository<Kudo, Long> {
    List<Kudo> findAll();
    List<Kudo> findAllByUtilisateurIn(List<Utilisateur>utilisateurs);
    List<Kudo> findByIdK(Long id);
    List<Kudo> findByNombeneficiaire(String nombeneficiaire);
    Boolean existsByNombeneficiaire(String nombeneficiaire);
    List<Kudo> findAllByDatekudoIsBetween(Date debut, Date fin);
    Optional<Kudo> findById(Long id);

}
