package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Structure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StructureRepository extends JpaRepository<Structure ,Long> {
}
