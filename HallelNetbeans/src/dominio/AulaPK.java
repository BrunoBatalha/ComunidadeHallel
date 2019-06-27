/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dominio;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 *
 * @author Aluno
 */
@Embeddable
public class AulaPK implements Serializable {

    @Basic(optional = false)
    @Column(name = "nome")
    private String nome;
    @Basic(optional = false)
    @Column(name = "nomeForm")
    private String nomeForm;
    @Basic(optional = false)
    @Column(name = "nomeAdm")
    private String nomeAdm;

    public AulaPK() {
    }

    public AulaPK(String nome, String nomeForm, String nomeAdm) {
        this.nome = nome;
        this.nomeForm = nomeForm;
        this.nomeAdm = nomeAdm;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomeForm() {
        return nomeForm;
    }

    public void setNomeForm(String nomeForm) {
        this.nomeForm = nomeForm;
    }

    public String getNomeAdm() {
        return nomeAdm;
    }

    public void setNomeAdm(String nomeAdm) {
        this.nomeAdm = nomeAdm;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nome != null ? nome.hashCode() : 0);
        hash += (nomeForm != null ? nomeForm.hashCode() : 0);
        hash += (nomeAdm != null ? nomeAdm.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof AulaPK)) {
            return false;
        }
        AulaPK other = (AulaPK) object;
        if ((this.nome == null && other.nome != null) || (this.nome != null && !this.nome.equals(other.nome))) {
            return false;
        }
        if ((this.nomeForm == null && other.nomeForm != null) || (this.nomeForm != null && !this.nomeForm.equals(other.nomeForm))) {
            return false;
        }
        if ((this.nomeAdm == null && other.nomeAdm != null) || (this.nomeAdm != null && !this.nomeAdm.equals(other.nomeAdm))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dominio.AulaPK[ nome=" + nome + ", nomeForm=" + nomeForm + ", nomeAdm=" + nomeAdm + " ]";
    }
    
}
