package digitalkudo.kudowall.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import digitalkudo.kudowall.model.Utilisateur;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserPrinciple implements UserDetails {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nom;
    private String email;
    private String username;
    private Integer telephone;
    private Integer nbrepoint;
    private Integer nbrekudo;

    @JsonIgnore
    private String password;


    private Collection<? extends GrantedAuthority> authorities;

    public UserPrinciple(Long id, String nom,String email,Integer telephone,
                         String username, Integer nbrekudo,Integer nbrepoint,String password,
                         Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.telephone = telephone;
        this.username = username;
        this.nbrekudo = nbrekudo;
        this.nbrepoint = nbrepoint;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserPrinciple build(Utilisateur user) {
        List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(role.getName().name())
        ).collect(Collectors.toList());

        return new UserPrinciple(
                user.getId(),
                user.getNom(),
                user.getEmail(),
                user.getTelephone(),
                user.getUsername(),
                user.getNbrekudo(),
                user.getNbrepoint(),
                user.getPassword(),
                authorities
        );
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getEmail() {
        return email;
    }

    public Integer getTelephone() { return telephone; }

    public Integer getNbrepoint(){ return nbrepoint; }

    public Integer getNbrekudo(){ return nbrekudo; }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserPrinciple user = (UserPrinciple) o;
        return Objects.equals(id, user.id);
    }
}
