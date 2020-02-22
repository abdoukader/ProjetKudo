package digitalkudo.kudowall.model;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "kudoPoint")
public class KudoPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Size(min =3 ,max =30)
    private String libelle;
    private Integer point;

    public KudoPoint(){

    }
    public KudoPoint(String libelle,Integer point){
        this.libelle = libelle;
        this.point = point;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
        this.point = point;
    }
}
