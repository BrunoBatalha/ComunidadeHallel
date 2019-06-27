/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import dominio.Administrador;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.dao.DataAccessException;

/**
 *
 * @author Aluno
 */
public class AdministradorDAO {
    
    public EntityManager em;
    private String nome;
    private String email;
    private String senha;
    
    public AdministradorDAO(String nome, String email, String senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    
    public Administrador gravar(Administrador administrador) throws DataAccessException{
        return em.merge(administrador);
    }
    
    public void excluir(Administrador administrador) throws DataAccessException{
        em.remove(carregar(administrador.getNome()));
    }
    
    public Administrador carregar(String nome)throws DataAccessException{
        return em.find(Administrador.class, nome);
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
