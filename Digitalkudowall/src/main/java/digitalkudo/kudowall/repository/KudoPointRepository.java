package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.KudoPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;


@Repository
public interface KudoPointRepository extends JpaRepository<KudoPoint ,Integer> {
    List<KudoPoint> findAll();
    Optional<KudoPoint> findOneById(int point);
}
