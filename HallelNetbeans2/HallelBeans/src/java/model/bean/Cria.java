/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
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
@Table(name = "cria")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Cria.findAll", query = "SELECT c FROM Cria c")
    , @NamedQuery(name = "Cria.findByDataC", query = "SELECT c FROM Cria c WHERE c.criaPK.dataC = :dataC")
    , @NamedQuery(name = "Cria.findByNomeAdm", query = "SELECT c FROM Cria c WHERE c.criaPK.nomeAdm = :nomeAdm")
    , @NamedQuery(name = "Cria.findByTituloEv", query = "SELECT c FROM Cria c WHERE c.criaPK.tituloEv = :tituloEv")
    , @NamedQuery(name = "Cria.findByHoraC", query = "SELECT c FROM Cria c WHERE c.horaC = :horaC")})
public class Cria implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected CriaPK criaPK;
    @Basic(optional = false)
    @Column(name = "horaC")
    @Temporal(TemporalType.TIME)
    private Date horaC;

    public Cria() {
    }

    public Cria(CriaPK criaPK) {
        this.criaPK = criaPK;
    }

    public Cria(CriaPK criaPK, Date horaC) {
        this.criaPK = criaPK;
        this.horaC = horaC;
    }

    public Cria(Date dataC, String nomeAdm, String tituloEv) {
        this.criaPK = new CriaPK(dataC, nomeAdm, tituloEv);
    }

    public CriaPK getCriaPK() {
        return criaPK;
    }

    public void setCriaPK(CriaPK criaPK) {
        this.criaPK = criaPK;
    }

    public Date getHoraC() {
        return horaC;
    }

    public void setHoraC(Date horaC) {
        this.horaC = horaC;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (criaPK != null ? criaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Cria)) {
            return false;
        }
        Cria other = (Cria) object;
        if ((this.criaPK == null && other.criaPK != null) || (this.criaPK != null && !this.criaPK.equals(other.criaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.Cria[ criaPK=" + criaPK + " ]";
    }
    
}
