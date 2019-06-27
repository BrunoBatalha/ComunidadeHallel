/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import dominio.Administrador;
import dominio.Formacao;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.dao.DataAccessException;

/**
 *
 * @author Aluno
 */
public class FormacaoDAO {
    
    public EntityManager em;
    private String nome;
    private Administrador nomeAdm;
    private String descricao;
    private Integer nmrAulas;
    
    public FormacaoDAO(String nome, Administrador nomeAdm, String descricao, Integer nmrAulas){
        this.nome = nome;
        this.nomeAdm = nomeAdm;
        this.descricao = descricao;
        this.nmrAulas = nmrAulas;
    }
    
    public Formacao gravar(Formacao formacao) throws DataAccessException{
        return em.merge(formacao);
    }
    
    public void excluir(Formacao formacao) throws DataAccessException{
        em.remove(carregar(formacao.getNome));
    }
    
    public Formacao carregar(String nome)throws DataAccessException{
        return em.find(Formacao.class, nome);
    }
    
    public List obterTodos(String nome) throws DataAccessException{
        Query qry = em.createQuery("SELECT a FROM ADMINISTRADOR a WHERE a.nome =: nome");
        qry.setParameter("nome", nome);
        
        return qry.getResultList();
    }
    
    public List obterPorNome(String nome, String email){
        Query qry = em.createQuery("SELECT a FROM ADMINISTRADOR a WHERE a.nome.nome LIKE: nome AND a.email LIKE: email");
        qry.setParameter("nome", nome);
        qry.setParameter("email", "%" + email + "%");
        return qry.getResultList();
    }
    
}
