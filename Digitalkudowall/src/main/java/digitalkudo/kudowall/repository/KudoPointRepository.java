package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.KudoPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface KudoPointRepository extends JpaRepository<KudoPoint ,Integer> {

}
