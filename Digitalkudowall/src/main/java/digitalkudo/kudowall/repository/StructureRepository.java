package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Structure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface StructureRepository extends JpaRepository<Structure, Integer > {
    List<Structure> findAll();
    public Optional<Structure> findStructureById(int id);
    //List<Structure> findById(int id);

}
