package digitalkudo.kudowall.repository;

import digitalkudo.kudowall.model.Structure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StructureRepository extends JpaRepository<Structure, Long > {
    List<Structure> findAll();
    Optional<Structure> findById(Long id);
    Optional<Structure> findAllBySousStructure(String sousStructure);
    Optional<Structure> findStructureById(Long id);
    //Optional<Structure> findStructureBySousStructure(String sousStructure);
    Optional<Structure> findById(Integer id);
}
