
package model.dao;

import conexao.ConnectionFactory;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import model.bean.Pedidooracao;
import org.springframework.dao.DataAccessException;

public class PedidoOracaoDAO extends GenericoDAO<Pedidooracao>{
    
    public List obterTodos() throws DataAccessException {
        EntityManager em = ConnectionFactory.getEntityManager();
        List<Pedidooracao> pedidos;
        try {
            Query qry = em.createNamedQuery("Pedidooracao.findAll",Pedidooracao.class);
            pedidos = qry.getResultList();
        } catch (Exception e) {
            pedidos = new ArrayList<>();
            e.printStackTrace();

        } finally {
            em.close();
        }
        return pedidos;
    }

    public Pedidooracao obterPorNome(String nome) throws DataAccessException {
        EntityManager em = ConnectionFactory.getEntityManager();
        Pedidooracao pedido;
        try {
            Query qry = em.createNamedQuery("Pedidooracao.findByNome",Pedidooracao.class);
            qry.setParameter("nome", nome);
            pedido = (Pedidooracao)qry.getSingleResult();
        } catch (Exception e) {
            pedido = null;
        } 
        return pedido;
    }

}
