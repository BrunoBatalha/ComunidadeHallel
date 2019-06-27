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
@Table(name = "inscreve")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Inscreve.findAll", query = "SELECT i FROM Inscreve i")
    , @NamedQuery(name = "Inscreve.findByDataInsc", query = "SELECT i FROM Inscreve i WHERE i.inscrevePK.dataInsc = :dataInsc")
    , @NamedQuery(name = "Inscreve.findByCPFUsu", query = "SELECT i FROM Inscreve i WHERE i.inscrevePK.cPFUsu = :cPFUsu")
    , @NamedQuery(name = "Inscreve.findByTituloEv", query = "SELECT i FROM Inscreve i WHERE i.inscrevePK.tituloEv = :tituloEv")
    , @NamedQuery(name = "Inscreve.findByNmrInscricao", query = "SELECT i FROM Inscreve i WHERE i.nmrInscricao = :nmrInscricao")
    , @NamedQuery(name = "Inscreve.findByHora", query = "SELECT i FROM Inscreve i WHERE i.hora = :hora")})
public class Inscreve implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected InscrevePK inscrevePK;
    @Basic(optional = false)
    @Column(name = "nmrInscricao")
    private int nmrInscricao;
    @Basic(optional = false)
    @Column(name = "hora")
    @Temporal(TemporalType.TIME)
    private Date hora;
    @JoinColumn(name = "CPFUsu", referencedColumnName = "CPF", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Usuario usuario;
    @JoinColumn(name = "tituloEv", referencedColumnName = "titulo", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Evento evento;

    public Inscreve() {
    }

    public Inscreve(InscrevePK inscrevePK) {
        this.inscrevePK = inscrevePK;
    }

    public Inscreve(InscrevePK inscrevePK, int nmrInscricao, Date hora) {
        this.inscrevePK = inscrevePK;
        this.nmrInscricao = nmrInscricao;
        this.hora = hora;
    }

    public Inscreve(Date dataInsc, String cPFUsu, String tituloEv) {
        this.inscrevePK = new InscrevePK(dataInsc, cPFUsu, tituloEv);
    }

    public InscrevePK getInscrevePK() {
        return inscrevePK;
    }

    public void setInscrevePK(InscrevePK inscrevePK) {
        this.inscrevePK = inscrevePK;
    }

    public int getNmrInscricao() {
        return nmrInscricao;
    }

    public void setNmrInscricao(int nmrInscricao) {
        this.nmrInscricao = nmrInscricao;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Evento getEvento() {
        return evento;
    }

    public void setEvento(Evento evento) {
        this.evento = evento;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (inscrevePK != null ? inscrevePK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Inscreve)) {
            return false;
        }
        Inscreve other = (Inscreve) object;
        if ((this.inscrevePK == null && other.inscrevePK != null) || (this.inscrevePK != null && !this.inscrevePK.equals(other.inscrevePK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.Inscreve[ inscrevePK=" + inscrevePK + " ]";
    }
    
}
