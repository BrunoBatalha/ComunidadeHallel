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
public class EventoPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "titulo")
    private String titulo;
    @Basic(optional = false)
    @Column(name = "dataEv")
    @Temporal(TemporalType.DATE)
    private Date dataEv;

    public EventoPK() {
    }

    public EventoPK(String titulo, Date dataEv) {
        this.titulo = titulo;
        this.dataEv = dataEv;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Date getDataEv() {
        return dataEv;
    }

    public void setDataEv(Date dataEv) {
        this.dataEv = dataEv;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (titulo != null ? titulo.hashCode() : 0);
        hash += (dataEv != null ? dataEv.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof EventoPK)) {
            return false;
        }
        EventoPK other = (EventoPK) object;
        if ((this.titulo == null && other.titulo != null) || (this.titulo != null && !this.titulo.equals(other.titulo))) {
            return false;
        }
        if ((this.dataEv == null && other.dataEv != null) || (this.dataEv != null && !this.dataEv.equals(other.dataEv))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.EventoPK[ titulo=" + titulo + ", dataEv=" + dataEv + " ]";
    }
    
}
