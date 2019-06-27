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
public class MatriculaPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "CPFUsu")
    private String cPFUsu;
    @Basic(optional = false)
    @Column(name = "nomeForm")
    private String nomeForm;
    @Basic(optional = false)
    @Column(name = "dataI")
    @Temporal(TemporalType.DATE)
    private Date dataI;

    public MatriculaPK() {
    }

    public MatriculaPK(String cPFUsu, String nomeForm, Date dataI) {
        this.cPFUsu = cPFUsu;
        this.nomeForm = nomeForm;
        this.dataI = dataI;
    }

    public String getCPFUsu() {
        return cPFUsu;
    }

    public void setCPFUsu(String cPFUsu) {
        this.cPFUsu = cPFUsu;
    }

    public String getNomeForm() {
        return nomeForm;
    }

    public void setNomeForm(String nomeForm) {
        this.nomeForm = nomeForm;
    }

    public Date getDataI() {
        return dataI;
    }

    public void setDataI(Date dataI) {
        this.dataI = dataI;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (cPFUsu != null ? cPFUsu.hashCode() : 0);
        hash += (nomeForm != null ? nomeForm.hashCode() : 0);
        hash += (dataI != null ? dataI.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MatriculaPK)) {
            return false;
        }
        MatriculaPK other = (MatriculaPK) object;
        if ((this.cPFUsu == null && other.cPFUsu != null) || (this.cPFUsu != null && !this.cPFUsu.equals(other.cPFUsu))) {
            return false;
        }
        if ((this.nomeForm == null && other.nomeForm != null) || (this.nomeForm != null && !this.nomeForm.equals(other.nomeForm))) {
            return false;
        }
        if ((this.dataI == null && other.dataI != null) || (this.dataI != null && !this.dataI.equals(other.dataI))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.MatriculaPK[ cPFUsu=" + cPFUsu + ", nomeForm=" + nomeForm + ", dataI=" + dataI + " ]";
    }
    
}
