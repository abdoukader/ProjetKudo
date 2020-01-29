package digitalkudo.kudowall.model;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.userdetails.User;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "kudo")
public class Kudo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 255)
    private String commentaire;

    @NotBlank
    @Size(max = 30)
    private String nomBeneficiaire;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dateKudo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Utilisateur utilisateur;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private KudoPoint kudoPoint;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }

    public String getNomBeneficiaire() {
        return nomBeneficiaire;
    }

    public void setNomBeneficiaire(String nomBeneficiaire) {
        this.nomBeneficiaire = nomBeneficiaire;
    }

    public Date getDateKudo() {
        return dateKudo;
    }

    public void setDateKudo(Date dateKudo) {
        this.dateKudo = dateKudo;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public KudoPoint getKudoPoint() {
        return kudoPoint;
    }

    public void setKudoPoint(KudoPoint kudoPoint) {
        this.kudoPoint = kudoPoint;
    }
}
