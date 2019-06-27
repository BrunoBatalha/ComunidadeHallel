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
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author Aluno
 */
@Embeddable
public class InscrevePK implements Serializable {

    @Basic(optional = false)
    @Column(name = "dataInsc")
    @Temporal(TemporalType.DATE)
    private Date dataInsc;
    @Basic(optional = false)
    @Column(name = "CPFUsu")
    private String cPFUsu;
    @Basic(optional = false)
    @Column(name = "tituloEv")
    private String tituloEv;

    public InscrevePK() {
    }

    public InscrevePK(Date dataInsc, String cPFUsu, String tituloEv) {
        this.dataInsc = dataInsc;
        this.cPFUsu = cPFUsu;
        this.tituloEv = tituloEv;
    }

    public Date getDataInsc() {
        return dataInsc;
    }

    public void setDataInsc(Date dataInsc) {
        this.dataInsc = dataInsc;
    }

    public String getCPFUsu() {
        return cPFUsu;
    }

    public void setCPFUsu(String cPFUsu) {
        this.cPFUsu = cPFUsu;
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
        hash += (dataInsc != null ? dataInsc.hashCode() : 0);
        hash += (cPFUsu != null ? cPFUsu.hashCode() : 0);
        hash += (tituloEv != null ? tituloEv.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof InscrevePK)) {
            return false;
        }
        InscrevePK other = (InscrevePK) object;
        if ((this.dataInsc == null && other.dataInsc != null) || (this.dataInsc != null && !this.dataInsc.equals(other.dataInsc))) {
            return false;
        }
        if ((this.cPFUsu == null && other.cPFUsu != null) || (this.cPFUsu != null && !this.cPFUsu.equals(other.cPFUsu))) {
            return false;
        }
        if ((this.tituloEv == null && other.tituloEv != null) || (this.tituloEv != null && !this.tituloEv.equals(other.tituloEv))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.InscrevePK[ dataInsc=" + dataInsc + ", cPFUsu=" + cPFUsu + ", tituloEv=" + tituloEv + " ]";
    }
    
}
