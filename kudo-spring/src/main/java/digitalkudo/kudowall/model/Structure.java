package digitalkudo.kudowall.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "structure")
public class Structure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String departement;

    @NotBlank
    @Size(max = 20)
    private String sousStructure;

    @NotBlank
    @Size(max = 20)
    private String lieu;

    @OneToMany(mappedBy = "structure",cascade = CascadeType.ALL)
    List <Utilisateur> utilisateur;

    public Structure(){

    }

    public Structure(Long id){this.id = id;}

    public Structure(String departement, String sousStructure, String lieu) {
        this.departement = departement;
        this.sousStructure = sousStructure;
        this.lieu = lieu;

    }

    @Override
    public String toString() {
        return "Structure{" +
                "id=" + id +
                ", departement='" + departement + '\'' +
                ", sousStructure='" + sousStructure + '\'' +
                ", lieu='" + lieu + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Structure structure = (Structure) o;
        return Objects.equals(id, structure.id) &&
                Objects.equals(departement, structure.departement) &&
                Objects.equals(sousStructure, structure.sousStructure) &&
                Objects.equals(lieu, structure.lieu);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, departement, sousStructure, lieu);
    }

    public void get(){ }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartement() {
        return departement;
    }

    public void setDepartement(String departement) {
        this.departement = departement;
    }

    public String getSousStructure() {
        return sousStructure;
    }

    public void setSousStructure(String sousStructure) {
        this.sousStructure = sousStructure;
    }

    public String getLieu() { return lieu; }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }


}
