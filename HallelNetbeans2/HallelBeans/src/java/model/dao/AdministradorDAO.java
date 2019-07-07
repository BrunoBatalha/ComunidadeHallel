/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import entitymanager.ConnectionFactory;
import java.util.ArrayList;
import model.bean.Administrador;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.dao.DataAccessException;

public class AdministradorDAO extends GenericoDAO<Administrador> {

    public List obterTodos() throws DataAccessException {
        EntityManager em = ConnectionFactory.getEntityManager();
        List<Administrador> administradores;
        try {
            Query qry = em.createQuery("Administrador.obterTodos");
            administradores = qry.getResultList();
        } catch (Exception e) {
            administradores = new ArrayList<>();
        } finally {
            em.close();
        }
        return administradores;
    }

    public Administrador obterLoginSenha(String login, String senha) throws DataAccessException {
        EntityManager em = ConnectionFactory.getEntityManager();
        List<Administrador> administradores;
        try {
            Query qry = em.createQuery("Administrador.obterLoginSenha");
            qry.setParameter("login", login);
            qry.setParameter("senha", senha);
            administradores = qry.getResultList();
        } catch (Exception e) {
            administradores = new ArrayList<>();
        } finally {
            em.close();
        }
        return administradores.get(0);
    }

}
