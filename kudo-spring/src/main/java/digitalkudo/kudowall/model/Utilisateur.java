package digitalkudo.kudowall.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
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

public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Size(min=3, max = 50)
    private String nom;

    @NaturalId
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @Column(length = 15)
    private String telephone;
    @Column(length = 50)

    @NotBlank
    @Size(min=3, max = 50)
    private String username;

    @NotBlank
    @Size(min=6, max = 100)
    private String password;

    private Long    structure;
    private Integer nbrepoint;
    private Integer nbrekudo;

    //Relation Utilisateur_Role
    @JsonIgnoreProperties({"users"})
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    //Relation Utilisateur_Structure
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_structures",
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "structure_id"))

    private Set<Structure> structures = new HashSet<>();

    //Relaton Utilisateur_kudo
    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
    public List<Kudo> kudo;

    public Utilisateur() { }

    public Utilisateur(String nom, String email, String telephone, String username, String password, Integer nbrekudo, Integer nbrepoint) {
        this.nom = nom;
        this.email = email;
        this.telephone = telephone;
        this.username = username;
        this.password = password;
        this.nbrekudo = nbrekudo;
        this.nbrekudo = nbrepoint;
    }

    public Long getId() {
        return id;
    }

    public Integer getNbrepoint() {
        return nbrepoint;
    }

    public void setNbrepoint(Integer nbrepoint) {
        this.nbrepoint = nbrepoint;
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

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
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

<<<<<<< HEAD
    public Integer getNbrepoint() {
        return nbrepoint;
    }

    public void setNbrepoint(Integer nbrepoint) {
        this.nbrepoint = nbrepoint;
    }

    public Integer getNbrekudo() {
        return nbrekudo;
=======
    public List<Kudo> getKudo() {
        return kudo;
>>>>>>> 9877e641a7828aa48ed79398d3e78dd88304aed2
    }

    public void setNbrekudo(Integer nbrekudo) {
        this.nbrekudo = nbrekudo;
    }

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

    public List<Kudo> getKudo() {
        return kudo;
    }

    public void setKudo(List<Kudo> kudo) {
        this.kudo = kudo;
    }
}
