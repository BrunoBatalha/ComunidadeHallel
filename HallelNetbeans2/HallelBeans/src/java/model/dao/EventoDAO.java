/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import entitymanager.ConnectionFactory;
import java.util.Date;
import model.bean.Evento;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.dao.DataAccessException;

/**
 *
 * @author Aluno
 */
public class EventoDAO {
    
    public EntityManager em;
    private String titulo;
    private Date dataEv;
    private String descricao;
    private String localEv;
    
    public EventoDAO(String titulo, Date dataEv, String descricao, String localEv){
        this.titulo = titulo;
        this.dataEv = dataEv;
        this.descricao = descricao;
        this.localEv = localEv;
        em = ConnectionFactory.getEntityManager();
    }
    
     
    public EventoDAO(){
        em = ConnectionFactory.getEntityManager();
    }
           
    public Evento gravar(Evento evento) throws DataAccessException{
         try {
            em.getTransaction().begin();
            System.out.println("Salvando a evento.");
            // Verifica se o usuario ainda não está salva no banco de dados.
            if (evento.getTitulo()== null) {
                //Salva os dados do usuario.
                em.persist(evento);
            } else {
                //Atualiza ou adiciona os dados do usuario.
                evento = em.merge(evento);
            }
            // Finaliza a transação.
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return evento;
    }
    
    public void excluir(Evento evento) throws DataAccessException{
         try {
            // Inicia uma transação com o banco de dados.
            em.getTransaction().begin();
            // Consulta a pessoa na base de dados através do seu ID.
            Evento removerAdm = em.find(Evento.class, evento.getTitulo());
            System.out.println("Excluindo os dados de: " + removerAdm.getTitulo());
            // Remove a pessoa da base de dados.
            em.remove(removerAdm);
            // Finaliza a transação.
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    public Evento carregar(String nome)throws DataAccessException{
        return em.find(Evento.class, nome);
    }
    
    public List obterTodos() throws DataAccessException{
        Query qry = em.createQuery("SELECT a FROM Evento a ");
        return qry.getResultList();
    }
    
    public List obterPorNome(String nome, String email){
        Query qry = em.createQuery("SELECT a FROM ADMINISTRADOR a WHERE a.nome.nome LIKE: nome AND a.email LIKE: email");
        qry.setParameter("nome", nome);
        qry.setParameter("email", "%" + email + "%");
        return qry.getResultList();
    }
   
}
