package digitalkudo.kudowall.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;
import java.util.Optional;

@Entity
@Table(name = "kudo")
public class Kudo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idK;
    @NotBlank
    @Column(length = 150)
    private String commentaire;
    @Column(length = 50)
    @NotBlank
    private String nombeneficiaire;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date datekudo;
    // Relation Kudo_Utilisateur

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"id","kudos","structure","password","username","nbrepoint","nbrekudo","telephone","email","roles","datekudo"})
    @JoinColumn
    private Utilisateur utilisateur;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties({"id","departement","sousStructure","lieu"})
    @JoinColumn
    private Structure structures;

    //Relation Kudo_KudoPoint
    @JsonIgnoreProperties({"point","libelle"})
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private KudoPoint kudoPoint;

    public Kudo(){}

    public Kudo(String nombeneficiaire,String commentaire){
        this.getNombeneficiaire();
        this.getCommentaire();

    }

    public Kudo(String nom) {

    }

    //getter and setters
    public Long getIdK() {
        return idK;
    }

    public void setIdK(Long idK) {
        this.idK = idK;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }

    public String getNombeneficiaire() {
        return nombeneficiaire;
    }

    public void setNombeneficiaire(String nombeneficiaire) {
        this.nombeneficiaire = nombeneficiaire;
    }

    public Date getDatekudo() {
        return datekudo;
    }

    public void setDatekudo(Date datekudo) {
        this.datekudo = datekudo;
    }

    public KudoPoint getKudoPoint() {
        return kudoPoint;
    }

    public void setKudoPoint(KudoPoint kudoPoint) {
        this.kudoPoint = kudoPoint;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public Structure getStructures() {
        return structures;
    }

    public void setStructures(Structure structures) {
        this.structures = structures;
    }
}
