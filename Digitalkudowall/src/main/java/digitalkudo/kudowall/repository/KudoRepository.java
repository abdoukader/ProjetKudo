package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Kudo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KudoRepository extends JpaRepository<Kudo, Long> {
    List<Kudo> findAll();
    List<Kudo> findByNombeneficiaire(String nombeneficiaire);
    Boolean existsByNombeneficiaire(String nombeneficiaire);
}
