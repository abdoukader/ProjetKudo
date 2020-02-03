package digitalkudo.kudowall.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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

    public Structure(){

    }

    public Structure(String departement, String sousStructure, String lieu) {
        this.departement = departement;
        this.sousStructure = sousStructure;
        this.lieu = lieu;

    }

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
