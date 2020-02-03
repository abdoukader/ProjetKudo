package digitalkudo.kudowall.model;

import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "kudo")
public class Kudo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idK;
    @Column(length = 150)
    private String commentaire;
    @Column(length = 50)
    private String nombeneficiare;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date datekudo;

    // Relation Kudo_Utilisateur
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private Utilisateur utilisateur;

    //Relation Kudo_KudoPoint
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private KudoPoint kudoPoint;

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

    public String getNombeneficiare() { return nombeneficiare; }

    public void setNombeneficiare(String nombeneficiare) { this.nombeneficiare = nombeneficiare; }

    public Date getDatekudo() {
        return datekudo;
    }

    public void setDatekudo(Date datekudo) {
        this.datekudo = datekudo;
    }
}
