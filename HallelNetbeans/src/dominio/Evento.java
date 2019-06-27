/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dominio;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Aluno
 */
@Entity
@Table(name = "evento")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Evento.findAll", query = "SELECT e FROM Evento e")
    , @NamedQuery(name = "Evento.findByTitulo", query = "SELECT e FROM Evento e WHERE e.eventoPK.titulo = :titulo")
    , @NamedQuery(name = "Evento.findByDataEv", query = "SELECT e FROM Evento e WHERE e.eventoPK.dataEv = :dataEv")
    , @NamedQuery(name = "Evento.findByDescricao", query = "SELECT e FROM Evento e WHERE e.descricao = :descricao")
    , @NamedQuery(name = "Evento.findByLocalEv", query = "SELECT e FROM Evento e WHERE e.localEv = :localEv")
    , @NamedQuery(name = "Evento.findByHoraEv", query = "SELECT e FROM Evento e WHERE e.horaEv = :horaEv")
    , @NamedQuery(name = "Evento.findByInscritos", query = "SELECT e FROM Evento e WHERE e.inscritos = :inscritos")})
public class Evento implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected EventoPK eventoPK;
    @Basic(optional = false)
    @Column(name = "descricao")
    private String descricao;
    @Basic(optional = false)
    @Column(name = "localEv")
    private String localEv;
    @Basic(optional = false)
    @Column(name = "horaEv")
    @Temporal(TemporalType.TIME)
    private Date horaEv;
    @Basic(optional = false)
    @Column(name = "inscritos")
    private int inscritos;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "evento")
    private Collection<Inscreve> inscreveCollection;

    public Evento() {
    }

    public Evento(EventoPK eventoPK) {
        this.eventoPK = eventoPK;
    }

    public Evento(EventoPK eventoPK, String descricao, String localEv, Date horaEv, int inscritos) {
        this.eventoPK = eventoPK;
        this.descricao = descricao;
        this.localEv = localEv;
        this.horaEv = horaEv;
        this.inscritos = inscritos;
    }

    public Evento(String titulo, Date dataEv) {
        this.eventoPK = new EventoPK(titulo, dataEv);
    }

    public EventoPK getEventoPK() {
        return eventoPK;
    }

    public void setEventoPK(EventoPK eventoPK) {
        this.eventoPK = eventoPK;
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

    public Date getHoraEv() {
        return horaEv;
    }

    public void setHoraEv(Date horaEv) {
        this.horaEv = horaEv;
    }

    public int getInscritos() {
        return inscritos;
    }

    public void setInscritos(int inscritos) {
        this.inscritos = inscritos;
    }

    @XmlTransient
    public Collection<Inscreve> getInscreveCollection() {
        return inscreveCollection;
    }

    public void setInscreveCollection(Collection<Inscreve> inscreveCollection) {
        this.inscreveCollection = inscreveCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (eventoPK != null ? eventoPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Evento)) {
            return false;
        }
        Evento other = (Evento) object;
        if ((this.eventoPK == null && other.eventoPK != null) || (this.eventoPK != null && !this.eventoPK.equals(other.eventoPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.Evento[ eventoPK=" + eventoPK + " ]";
    }
    
}
