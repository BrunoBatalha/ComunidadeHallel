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
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author Aluno
 */
@Embeddable
public class CriaPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "dataC")
    @Temporal(TemporalType.DATE)
    private Date dataC;
    @Basic(optional = false)
    @Column(name = "nomeAdm")
    private String nomeAdm;
    @Basic(optional = false)
    @Column(name = "tituloEv")
    private String tituloEv;

    public CriaPK() {
    }

    public CriaPK(Date dataC, String nomeAdm, String tituloEv) {
        this.dataC = dataC;
        this.nomeAdm = nomeAdm;
        this.tituloEv = tituloEv;
    }

    public Date getDataC() {
        return dataC;
    }

    public void setDataC(Date dataC) {
        this.dataC = dataC;
    }

    public String getNomeAdm() {
        return nomeAdm;
    }

    public void setNomeAdm(String nomeAdm) {
        this.nomeAdm = nomeAdm;
    }

    public String getTituloEv() {
        return tituloEv;
    }

    public void setTituloEv(String tituloEv) {
        this.tituloEv = tituloEv;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (dataC != null ? dataC.hashCode() : 0);
        hash += (nomeAdm != null ? nomeAdm.hashCode() : 0);
        hash += (tituloEv != null ? tituloEv.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof CriaPK)) {
            return false;
        }
        CriaPK other = (CriaPK) object;
        if ((this.dataC == null && other.dataC != null) || (this.dataC != null && !this.dataC.equals(other.dataC))) {
            return false;
        }
        if ((this.nomeAdm == null && other.nomeAdm != null) || (this.nomeAdm != null && !this.nomeAdm.equals(other.nomeAdm))) {
            return false;
        }
        if ((this.tituloEv == null && other.tituloEv != null) || (this.tituloEv != null && !this.tituloEv.equals(other.tituloEv))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.CriaPK[ dataC=" + dataC + ", nomeAdm=" + nomeAdm + ", tituloEv=" + tituloEv + " ]";
    }
    
}
