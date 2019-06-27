/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import entitymanager.GeraEntityManager;
import model.bean.Administrador;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import model.bean.Usuario;
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
        em = GeraEntityManager.getEntityManager();
    }
    
    public Administrador gravar(Administrador administrador) throws DataAccessException{
         try {
            em.getTransaction().begin();
            System.out.println("Salvando a usuario.");
            // Verifica se o usuario ainda não está salva no banco de dados.
            if (administrador.getNome()== null) {
                //Salva os dados do usuario.
                em.persist(administrador);
            } else {
                //Atualiza ou adiciona os dados do usuario.
                administrador = em.merge(administrador);
            }
            // Finaliza a transação.
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return administrador;
    }
    
    public void excluir(Administrador administrador) throws DataAccessException{
         try {
            // Inicia uma transação com o banco de dados.
            em.getTransaction().begin();
            // Consulta a pessoa na base de dados através do seu ID.
            Administrador removerAdm = em.find(Administrador.class, administrador.getNome());
            System.out.println("Excluindo os dados de: " + removerAdm.getNome());
            // Remove a pessoa da base de dados.
            em.remove(removerAdm);
            // Finaliza a transação.
            em.getTransaction().commit();
        } finally {
            em.close();
        }
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
