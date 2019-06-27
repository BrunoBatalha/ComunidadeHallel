/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import java.io.Serializable;
import java.util.Date;
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
@Table(name = "matricula")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Matricula.findAll", query = "SELECT m FROM Matricula m")
    , @NamedQuery(name = "Matricula.findByCPFUsu", query = "SELECT m FROM Matricula m WHERE m.matriculaPK.cPFUsu = :cPFUsu")
    , @NamedQuery(name = "Matricula.findByNomeForm", query = "SELECT m FROM Matricula m WHERE m.matriculaPK.nomeForm = :nomeForm")
    , @NamedQuery(name = "Matricula.findByDataI", query = "SELECT m FROM Matricula m WHERE m.matriculaPK.dataI = :dataI")
    , @NamedQuery(name = "Matricula.findByDataF", query = "SELECT m FROM Matricula m WHERE m.dataF = :dataF")})
public class Matricula implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected MatriculaPK matriculaPK;
    @Column(name = "dataF")
    @Temporal(TemporalType.DATE)
    private Date dataF;
    @JoinColumn(name = "CPFUsu", referencedColumnName = "CPF", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Usuario usuario;
    @JoinColumn(name = "nomeForm", referencedColumnName = "nome", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Formacao formacao;

    public Matricula() {
    }

    public Matricula(MatriculaPK matriculaPK) {
        this.matriculaPK = matriculaPK;
    }

    public Matricula(String cPFUsu, String nomeForm, Date dataI) {
        this.matriculaPK = new MatriculaPK(cPFUsu, nomeForm, dataI);
    }

    public MatriculaPK getMatriculaPK() {
        return matriculaPK;
    }

    public void setMatriculaPK(MatriculaPK matriculaPK) {
        this.matriculaPK = matriculaPK;
    }

    public Date getDataF() {
        return dataF;
    }

    public void setDataF(Date dataF) {
        this.dataF = dataF;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Formacao getFormacao() {
        return formacao;
    }

    public void setFormacao(Formacao formacao) {
        this.formacao = formacao;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (matriculaPK != null ? matriculaPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Matricula)) {
            return false;
        }
        Matricula other = (Matricula) object;
        if ((this.matriculaPK == null && other.matriculaPK != null) || (this.matriculaPK != null && !this.matriculaPK.equals(other.matriculaPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.Matricula[ matriculaPK=" + matriculaPK + " ]";
    }
    
}
