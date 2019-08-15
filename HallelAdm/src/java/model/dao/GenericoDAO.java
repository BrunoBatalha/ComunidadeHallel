package model.dao;

import conexao.ConnectionFactory;
import java.util.List;
import javax.persistence.EntityManager;
import org.springframework.dao.DataAccessException;

public class GenericoDAO<T extends EntidadeBase> {

    public EntityManager conectar() {
        EntityManager em = ConnectionFactory.getEntityManager();
        return em;
    }

    public T buscarId(Class<T> clazz, Integer id) {
        EntityManager em = conectar();
        T t = em.find(clazz, id);
        em.close();
        return t;
    }

    public void salvarOuAtualizar(T t) throws Exception {
        EntityManager em = conectar();
        try {
            em.getTransaction().begin();
            if (t.getId() == null) {
                em.persist(t);
            } else {
                em.merge(t);
            }
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }

    public void excluir(Class<T> clazz, Integer id) throws Exception {
        EntityManager em = conectar();
        T t = buscarId(clazz, id);
        try {
            em.getTransaction().begin();
            em.remove(t);
            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            throw new Exception("Erro ao excluir: " + e);
        } finally {
            em.close();
        }
    }
  
}
