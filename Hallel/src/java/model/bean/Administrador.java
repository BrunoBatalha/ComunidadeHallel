/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Glenda Batalha
 */
@Entity
@Table(name = "administrador")
@NamedQueries({
    @NamedQuery(name = "Administrador.findAll", query = "SELECT a FROM Administrador a")
    , @NamedQuery(name = "Administrador.findByIdAdm", query = "SELECT a FROM Administrador a WHERE a.idAdm = :idAdm")
    , @NamedQuery(name = "Administrador.findByLogin", query = "SELECT a FROM Administrador a WHERE a.login = :login")
    , @NamedQuery(name = "Administrador.findByEmail", query = "SELECT a FROM Administrador a WHERE a.email = :email")
    , @NamedQuery(name = "Administrador.findBySenha", query = "SELECT a FROM Administrador a WHERE a.senha = :senha")})
public class Administrador implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idAdm")
    private Integer idAdm;
    @Basic(optional = false)
    @Column(name = "login")
    private String login;
    @Basic(optional = false)
    @Column(name = "email")
    private String email;
    @Basic(optional = false)
    @Column(name = "senha")
    private String senha;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idAdm")
    private Collection<Evento> eventoCollection;
    @OneToMany(mappedBy = "idAdm")
    private Collection<Pedidooracao> pedidooracaoCollection;

    public Administrador() {
    }

    public Administrador(Integer idAdm) {
        this.idAdm = idAdm;
    }

    public Administrador(Integer idAdm, String login, String email, String senha) {
        this.idAdm = idAdm;
        this.login = login;
        this.email = email;
        this.senha = senha;
    }

    public Integer getIdAdm() {
        return idAdm;
    }

    public void setIdAdm(Integer idAdm) {
        this.idAdm = idAdm;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Collection<Evento> getEventoCollection() {
        return eventoCollection;
    }

    public void setEventoCollection(Collection<Evento> eventoCollection) {
        this.eventoCollection = eventoCollection;
    }

    public Collection<Pedidooracao> getPedidooracaoCollection() {
        return pedidooracaoCollection;
    }

    public void setPedidooracaoCollection(Collection<Pedidooracao> pedidooracaoCollection) {
        this.pedidooracaoCollection = pedidooracaoCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idAdm != null ? idAdm.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Administrador)) {
            return false;
        }
        Administrador other = (Administrador) object;
        if ((this.idAdm == null && other.idAdm != null) || (this.idAdm != null && !this.idAdm.equals(other.idAdm))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "model.bean.Administrador[ idAdm=" + idAdm + " ]";
    }
    
}
