/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.bean;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import model.dao.EntidadeBase;

/**
 *
 * @author Glenda Batalha
 */
@Entity
@Table(name = "pedidooracao")
@NamedQueries({
    @NamedQuery(name = "Pedidooracao.findAll", query = "SELECT p FROM Pedidooracao p")
    , @NamedQuery(name = "Pedidooracao.findByIdPedido", query = "SELECT p FROM Pedidooracao p WHERE p.idPedido = :idPedido")
    , @NamedQuery(name = "Pedidooracao.findByNome", query = "SELECT p FROM Pedidooracao p WHERE p.nome = :nome")
    , @NamedQuery(name = "Pedidooracao.findByEmail", query = "SELECT p FROM Pedidooracao p WHERE p.email = :email")
    , @NamedQuery(name = "Pedidooracao.findByVisualizado", query = "SELECT p FROM Pedidooracao p WHERE p.visualizado = :visualizado")})
public class Pedidooracao implements EntidadeBase {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idPedido")
    private Integer idPedido;
    @Basic(optional = false)
    @Column(name = "nome")
    private String nome;
    @Basic(optional = false)
    @Column(name = "email")
    private String email;
    @Basic(optional = false)
    @Lob
    @Column(name = "mensagem")
    private String mensagem;
    @Basic(optional = false)
    @Column(name = "visualizado")
    private boolean visualizado;
    @JoinColumn(name = "idAdm", referencedColumnName = "idAdm")
    @ManyToOne
    private Administrador idAdm;

    public Pedidooracao() {
    }

    public Pedidooracao(Integer idPedido) {
        this.idPedido = idPedido;
    }

    public Pedidooracao(Integer idPedido, String nome, String email, String mensagem, boolean visualizado) {
        this.idPedido = idPedido;
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
        this.visualizado = visualizado;
    }

    public Integer getId() {
        return idPedido;
    }

    public void setIdPedido(Integer idPedido) {
        this.idPedido = idPedido;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public boolean getVisualizado() {
        return visualizado;
    }

    public void setVisualizado(boolean visualizado) {
        this.visualizado = visualizado;
    }

    public Administrador getIdAdm() {
        return idAdm;
    }

    public void setIdAdm(Administrador idAdm) {
        this.idAdm = idAdm;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPedido != null ? idPedido.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Pedidooracao)) {
            return false;
        }
        Pedidooracao other = (Pedidooracao) object;
        if ((this.idPedido == null && other.idPedido != null) || (this.idPedido != null && !this.idPedido.equals(other.idPedido))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "model.bean.Pedidooracao[ idPedido=" + idPedido + " ]";
    }
    
}
