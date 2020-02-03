package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Kudo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KudoRepository extends JpaRepository<Kudo, Long> {
}
