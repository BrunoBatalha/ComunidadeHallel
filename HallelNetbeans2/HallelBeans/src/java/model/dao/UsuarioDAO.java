/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.dao;

import entitymanager.ConnectionFactory;
import java.util.Date;
import model.bean.Usuario;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.springframework.dao.DataAccessException;

/**
 *
 * @author Aluno
 */
public class UsuarioDAO {

    public EntityManager em;
    private String cpf;
    private String endereco;
    private String telefone;
    private String nome;
    private String email;
    private Date dataNasc;
    private String bairro;
    private String senha;

    public UsuarioDAO(String cpf, String endereco, String telefone, String nome, String email, Date dataNasc, String bairro, String senha) {
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.nome = nome;
        this.email = email;
        this.dataNasc = dataNasc;
        this.bairro = bairro;
        this.senha = senha;
        em = ConnectionFactory.getEntityManager();
    }

    public UsuarioDAO() {
        em = ConnectionFactory.getEntityManager();
    }

    public Usuario gravar(Usuario usuario) throws DataAccessException {
        try {
            em.getTransaction().begin();
            System.out.println("Salvando a usuario.");
            // Verifica se o usuario ainda não está salva no banco de dados.
            if (usuario.getNome() == null) {
                //Salva os dados do usuario.
                em.persist(usuario);
            } else {
                //Atualiza ou adiciona os dados do usuario.
                usuario = em.merge(usuario);
            }
            // Finaliza a transação.
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return usuario;
    }

    public void excluir(Usuario usuario) throws DataAccessException {
        try {
            // Inicia uma transação com o banco de dados.
            em.getTransaction().begin();
            // Consulta a pessoa na base de dados através do seu ID.
            Usuario removerUsu = em.find(Usuario.class, usuario.getNome());
            System.out.println("Excluindo os dados de: " + removerUsu.getNome());
            // Remove a pessoa da base de dados.
            em.remove(removerUsu);
            // Finaliza a transação.
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    public Usuario carregar(String nome) throws DataAccessException {
        return em.find(Usuario.class, nome);
    }

    public List obterTodos() throws DataAccessException {
        Query qry = em.createQuery("SELECT u FROM Usuario u ");
        return qry.getResultList();
    }

    public List obterPorNome(String nome) {
        Query qry = em.createQuery("SELECT u FROM Usuario u WHERE u.nome LIKE: nome");
        qry.setParameter("nome", "%" + nome + "%");
        return qry.getResultList();
    }

}
