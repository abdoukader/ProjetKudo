package digitalkudo.kudowall.model;

import org.hibernate.annotations.NaturalId;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "email"
        }),
        @UniqueConstraint(columnNames = {
                "username"
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

    private Integer nbrepoint;
    private Integer nbrekudo;

    //relation Utilisateur_Role
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public Utilisateur() {
    }

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getNbrepoint(Object o) { return nbrepoint; }

    public void setNbrepoint(Integer nbrepoint) { this.nbrepoint = nbrepoint; }

    public Integer getNbrekudo() { return nbrekudo; }

    public void setNbrekudo(Integer nbrekudo) { this.nbrekudo = nbrekudo; }



}
