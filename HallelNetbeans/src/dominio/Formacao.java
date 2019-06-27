/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dominio;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Aluno
 */
@Entity
@Table(name = "formacao")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Formacao.findAll", query = "SELECT f FROM Formacao f")
    , @NamedQuery(name = "Formacao.findByNome", query = "SELECT f FROM Formacao f WHERE f.formacaoPK.nome = :nome")
    , @NamedQuery(name = "Formacao.findByNomeAdm", query = "SELECT f FROM Formacao f WHERE f.formacaoPK.nomeAdm = :nomeAdm")
    , @NamedQuery(name = "Formacao.findByDescricao", query = "SELECT f FROM Formacao f WHERE f.descricao = :descricao")
    , @NamedQuery(name = "Formacao.findByNmrAulas", query = "SELECT f FROM Formacao f WHERE f.nmrAulas = :nmrAulas")})
public class Formacao implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected FormacaoPK formacaoPK;
    @Basic(optional = false)
    @Column(name = "descricao")
    private String descricao;
    @Basic(optional = false)
    @Column(name = "nmrAulas")
    private int nmrAulas;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "formacao")
    private Collection<Aula> aulaCollection;
    @JoinColumn(name = "nomeAdm", referencedColumnName = "nome", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Administrador administrador;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "formacao")
    private Collection<Matricula> matriculaCollection;

    public Formacao() {
    }

    public Formacao(FormacaoPK formacaoPK) {
        this.formacaoPK = formacaoPK;
    }

    public Formacao(FormacaoPK formacaoPK, String descricao, int nmrAulas) {
        this.formacaoPK = formacaoPK;
        this.descricao = descricao;
        this.nmrAulas = nmrAulas;
    }

    public Formacao(String nome, String nomeAdm) {
        this.formacaoPK = new FormacaoPK(nome, nomeAdm);
    }

    public FormacaoPK getFormacaoPK() {
        return formacaoPK;
    }

    public void setFormacaoPK(FormacaoPK formacaoPK) {
        this.formacaoPK = formacaoPK;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getNmrAulas() {
        return nmrAulas;
    }

    public void setNmrAulas(int nmrAulas) {
        this.nmrAulas = nmrAulas;
    }

    @XmlTransient
    public Collection<Aula> getAulaCollection() {
        return aulaCollection;
    }

    public void setAulaCollection(Collection<Aula> aulaCollection) {
        this.aulaCollection = aulaCollection;
    }

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }

    @XmlTransient
    public Collection<Matricula> getMatriculaCollection() {
        return matriculaCollection;
    }

    public void setMatriculaCollection(Collection<Matricula> matriculaCollection) {
        this.matriculaCollection = matriculaCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (formacaoPK != null ? formacaoPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Formacao)) {
            return false;
        }
        Formacao other = (Formacao) object;
        if ((this.formacaoPK == null && other.formacaoPK != null) || (this.formacaoPK != null && !this.formacaoPK.equals(other.formacaoPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.Formacao[ formacaoPK=" + formacaoPK + " ]";
    }
    
}
