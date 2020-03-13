package digitalkudo.kudowall.model;

public class Message {
    int status;
    String msg;
    String nombeneficiaire=null;
    String commentaire=null;
    String nom_emetteur=null;

    public Message(){}
    public Message(int status ,String msg ,String nombeneficiaire ,String commentaire,String nom_emetteur){
        this.status = status;
        this.msg = msg;
        this.nombeneficiaire = nombeneficiaire;
        this.commentaire = commentaire;
        this.nom_emetteur = nom_emetteur;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
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

    public String getNom_emetteur() {
        return nom_emetteur;
    }

    public void setNom_emetteur(String nom_emetteur) {
        this.nom_emetteur = nom_emetteur;
    }
}