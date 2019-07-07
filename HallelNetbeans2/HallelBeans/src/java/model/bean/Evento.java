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
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Batalha
 */
@Entity
@Table(name = "evento")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Evento.findAll", query = "SELECT e FROM Evento e")
    , @NamedQuery(name = "Evento.findByTitulo", query = "SELECT e FROM Evento e WHERE e.titulo = :titulo")
    , @NamedQuery(name = "Evento.findByDataEv", query = "SELECT e FROM Evento e WHERE e.dataEv = :dataEv")
    , @NamedQuery(name = "Evento.findByDescricao", query = "SELECT e FROM Evento e WHERE e.descricao = :descricao")
    , @NamedQuery(name = "Evento.findByLocalEv", query = "SELECT e FROM Evento e WHERE e.localEv = :localEv")
    , @NamedQuery(name = "Evento.findByInscritos", query = "SELECT e FROM Evento e WHERE e.inscritos = :inscritos")})
public class Evento implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "titulo")
    private String titulo;
    @Basic(optional = false)
    @Column(name = "dataEv")
    @Temporal(TemporalType.DATE)
    private Date dataEv;
    @Basic(optional = false)
    @Column(name = "descricao")
    private String descricao;
    @Basic(optional = false)
    @Column(name = "localEv")
    private String localEv;
    @Column(name = "inscritos")
    private Integer inscritos;

    public Evento() {
    }

    public Evento(String titulo) {
        this.titulo = titulo;
    }

    public Evento(String titulo, Date dataEv, String descricao, String localEv) {
        this.titulo = titulo;
        this.dataEv = dataEv;
        this.descricao = descricao;
        this.localEv = localEv;
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLocalEv() {
        return localEv;
    }

    public void setLocalEv(String localEv) {
        this.localEv = localEv;
    }

    public Integer getInscritos() {
        return inscritos;
    }

    public void setInscritos(Integer inscritos) {
        this.inscritos = inscritos;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (titulo != null ? titulo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Evento)) {
            return false;
        }
        Evento other = (Evento) object;
        if ((this.titulo == null && other.titulo != null) || (this.titulo != null && !this.titulo.equals(other.titulo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "model.bean.Evento[ titulo=" + titulo + " ]";
    }
    
}
