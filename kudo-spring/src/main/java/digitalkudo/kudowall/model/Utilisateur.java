package digitalkudo.kudowall.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "email"
        }),
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "telephone"
        })
})

public class
Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min=2)
    private String nom;
    @Size(min=2)
    private String nomTeam;
    @NaturalId
    @Size(max = 50)
    @Email
    private String email;

    @Column(length = 15)
    private Integer telephone;

    @Size(min=2)
    private String username;

    @Size(min=2)
    private String password;

    //private Long    structure;
    private Integer nbrepoint;
    private Integer nbrepointTeam;
    private Integer nbrekudo;
    private Integer kudos;

    //Relation Utilisateur_Role
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    //Relation Utilisateur_Structure
    //@JsonIgnore

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_structures",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "structure_id"))
    private Set<Structure> structures = new HashSet<>();

    //Relaton Utilisateur_kudo
    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
    @JsonIgnore
    public List<Kudo> kudo;


    //@JsonIgnoreProperties({"id","departement","sousStructure","lieu"})
    @JoinColumn
    private Long structure;

    public Utilisateur() { }

    public Utilisateur(String nom, String email, Integer telephone, String username, String password, Integer nbrekudo, Integer nbrepoint,Integer nbrepointTeam,Integer kudos) {
        this.nom = nom;
        this.nomTeam = nomTeam;
        this.email = email;
        this.telephone = telephone;
        this.username = username;
        this.password = password;
        this.nbrekudo = nbrekudo;
        this.nbrekudo = nbrepoint;
        this.nbrepointTeam = nbrepointTeam;
        this.kudos = kudos;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Integer getTelephone() {
        return telephone;
    }

    public void setTelephone(Integer telephone) {
        this.telephone = telephone;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

   public Long getStructure() {
        return structure;
    }

    public void setStructure(Long structure) {
        this.structure = structure;
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

    public Integer getKudos() { return kudos; }

    public void setKudos(Integer kudos) { this.kudos = kudos; }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

   public Set<Structure> getStructures() {
        return structures;
    }

    public void setStructures(Set<Structure> structures) {
        this.structures = structures;
    }

    public String getNomTeam() {
        return nomTeam;
    }

    public void setNomTeam(String nomTeam) {
        this.nomTeam = nomTeam;
    }

    public Integer getNbrepointTeam() {
        return nbrepointTeam;
    }

    public void setNbrepointTeam(Integer nbrepointTeam) {
        this.nbrepointTeam = nbrepointTeam;
    }

    public List<Kudo> getKudo() {
        return kudo;
    }

    public void setKudo(List<Kudo> kudo) {
        this.kudo = kudo;
    }



}
