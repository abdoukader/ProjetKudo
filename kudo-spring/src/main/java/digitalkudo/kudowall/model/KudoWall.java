package digitalkudo.kudowall.model;

import java.util.Date;

public class KudoWall {
        String sousStructure;
        Date   datekudo;
        String nombeneficiaire;
        String commentaire;
        Long structure;
        private Kudo kudo;
        String nom;
        String email;
        String username;
        String telephone;
        Integer nbrepoint;
        Integer nbrekudo;
        private Utilisateur utilisateur;
        String libelle;
        Integer point;
        private KudoPoint kudoPoint;


    public Date getDatekudo() {
        return datekudo;
    }

    public void setDatekudo(Date datekudo) {
        this.datekudo = datekudo;
    }

    public String getNombeneficiaire() {
        return nombeneficiaire;
    }

    public void setNombeneficiaire(String nombeneficiaire) {
        this.nombeneficiaire = nombeneficiaire;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public Integer getNbrepoint() {
        return nbrepoint;
    }

    public void setNbrepoint(Integer nbrepoint) {
        this.nbrepoint = nbrepoint;
    }

    public Integer getNbrekudo() {
        return nbrekudo;
    }

    public void setNbrekudo(Integer nbrekudo) {
        this.nbrekudo = nbrekudo;
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

    public Kudo getKudo() {
        return kudo;
    }

    public void setKudo(Kudo kudo) {
        this.kudo = kudo;
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

    public Long getStructure() {
        return structure;
    }

    public void setStructure(Long structure) {
        this.structure = structure;
    }

    public String getSousStructure() {
        return sousStructure;
    }

    public void setSousStructure(String sousStructure) {
        this.sousStructure = sousStructure;
    }
}
