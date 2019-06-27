/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dominio;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Aluno
 */
@Entity
@Table(name = "aula")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Aula.findAll", query = "SELECT a FROM Aula a")
    , @NamedQuery(name = "Aula.findByNome", query = "SELECT a FROM Aula a WHERE a.aulaPK.nome = :nome")
    , @NamedQuery(name = "Aula.findByNomeForm", query = "SELECT a FROM Aula a WHERE a.aulaPK.nomeForm = :nomeForm")
    , @NamedQuery(name = "Aula.findByNomeAdm", query = "SELECT a FROM Aula a WHERE a.aulaPK.nomeAdm = :nomeAdm")
    , @NamedQuery(name = "Aula.findByDuracao", query = "SELECT a FROM Aula a WHERE a.duracao = :duracao")
    , @NamedQuery(name = "Aula.findByVideoaula", query = "SELECT a FROM Aula a WHERE a.videoaula = :videoaula")
    , @NamedQuery(name = "Aula.findByCapa", query = "SELECT a FROM Aula a WHERE a.capa = :capa")
    , @NamedQuery(name = "Aula.findByMaterial", query = "SELECT a FROM Aula a WHERE a.material = :material")})
public class Aula implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected AulaPK aulaPK;
    @Basic(optional = false)
    @Column(name = "duracao")
    @Temporal(TemporalType.TIME)
    private Date duracao;
    @Basic(optional = false)
    @Column(name = "videoaula")
    private String videoaula;
    @Basic(optional = false)
    @Column(name = "capa")
    private String capa;
    @Basic(optional = false)
    @Column(name = "material")
    private String material;
    @JoinColumn(name = "nomeForm", referencedColumnName = "nome", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Formacao formacao;
    @JoinColumn(name = "nomeAdm", referencedColumnName = "nome", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Administrador administrador;

    public Aula() {
    }

    public Aula(AulaPK aulaPK) {
        this.aulaPK = aulaPK;
    }

    public Aula(AulaPK aulaPK, Date duracao, String videoaula, String capa, String material) {
        this.aulaPK = aulaPK;
        this.duracao = duracao;
        this.videoaula = videoaula;
        this.capa = capa;
        this.material = material;
    }

    public Aula(String nome, String nomeForm, String nomeAdm) {
        this.aulaPK = new AulaPK(nome, nomeForm, nomeAdm);
    }

    public AulaPK getAulaPK() {
        return aulaPK;
    }

    public void setAulaPK(AulaPK aulaPK) {
        this.aulaPK = aulaPK;
    }

    public Date getDuracao() {
        return duracao;
    }

    public void setDuracao(Date duracao) {
        this.duracao = duracao;
    }

    public String getVideoaula() {
        return videoaula;
    }

    public void setVideoaula(String videoaula) {
        this.videoaula = videoaula;
    }

    public String getCapa() {
        return capa;
    }

    public void setCapa(String capa) {
        this.capa = capa;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public Formacao getFormacao() {
        return formacao;
    }

    public void setFormacao(Formacao formacao) {
        this.formacao = formacao;
    }

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (aulaPK != null ? aulaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Aula)) {
            return false;
        }
        Aula other = (Aula) object;
        if ((this.aulaPK == null && other.aulaPK != null) || (this.aulaPK != null && !this.aulaPK.equals(other.aulaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.Aula[ aulaPK=" + aulaPK + " ]";
    }
    
}
