/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import conexao.ConnectionFactory;
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
public class EventoDAO extends GenericoDAO<Evento>{
       
    public List obterPorNome(String nome, String email){
        EntityManager em = ConnectionFactory.getEntityManager();
        List<Evento> eventos ;
        Query qry = em.createNamedQuery("Evento.findByNomeEvento");
        qry.setParameter("nome", nome);
        qry.setParameter("email", "%" + email + "%");
        eventos = qry.getResultList();
        return eventos;
    }
}
