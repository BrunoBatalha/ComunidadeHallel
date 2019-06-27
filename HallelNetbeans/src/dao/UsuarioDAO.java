/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import dominio.Usuario;
import java.util.Date;
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
    private String nome;
    private String senha;
    private String email;
    private String endereco;
    private String telefone;
    private Date dataNasc;
    private String bairro;
    
    public UsuarioDAO(String cpf, String nome, String senha, String email,String endereco, String telefone, Date dataNasc, String bairro){
        this.cpf = cpf;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.endereco = endereco;
        this.telefone =telefone;
        this.dataNasc = dataNasc;
        this.bairro = bairro;
    }
    
    public Usuario gravar(Usuario usuario) throws DataAccessException{
        return em.merge(usuario);
    }
    
    public void excluir(Usuario usuario) throws DataAccessException{
        em.remove(carregar(usuario.getNome()));
    }
    
    public Usuario carregar(String nome)throws DataAccessException{
        return em.find(Usuario.class, nome);
    }
    
    public List obterTodos(String cpf) throws DataAccessException{
        Query qry = em.createQuery("SELECT u FROM USUARIO u WHERE u.cpf =: cpf");
        qry.setParameter("cpf", cpf);
        
        return qry.getResultList();
    }
    
    public List obterPorNome(String cpf, String nome){
        Query qry = em.createQuery("SELECT U FROM USUARIO u WHERE u.CPF.CPF LIKE: cpf AND u.nome LIKE: nome");
        qry.setParameter("cpf", cpf);
        qry.setParameter("nome", "%" + nome + "%");
        return qry.getResultList();
    }
    
    public List obterPorEmail(String cpf, String email){
        Query qry = em.createQuery("SELECT U FROM USUARIO u WHERE u.CPF.CPF LIKE: cpf AND u.email LIKE: email");
        qry.setParameter("cpf", cpf);
        qry.setParameter("email", "%" + email + "%");
        return qry.getResultList();
    }
    
    public List obterPorEndereco(String cpf, String endereco){
        Query qry = em.createQuery("SELECT U FROM USUARIO u WHERE u.CPF.CPF LIKE: cpf AND u.endereco LIKE: endereco");
        qry.setParameter("cpf", cpf);
        qry.setParameter("endereco", "%" + endereco + "%");
        return qry.getResultList();
    }
    
    public List obterPorTelefone(String cpf, String telefone){
        Query qry = em.createQuery("SELECT U FROM USUARIO u WHERE u.CPF.CPF LIKE: cpf AND u.telefone LIKE: telefone");
        qry.setParameter("cpf", cpf);
        qry.setParameter("telefone", "%" + telefone + "%");
        return qry.getResultList();
    }
    
    public List obterPorDataNasc(String cpf, Date dataNasc){
        Query qry = em.createQuery("SELECT U FROM USUARIO u WHERE u.CPF.CPF LIKE: cpf AND u.dataNasc LIKE: dataNasc");
        qry.setParameter("cpf", cpf);
        qry.setParameter("dataNasc", dataNasc);
        return qry.getResultList();
    }
    
    public List obterPorBairro(String cpf, String bairro){
        Query qry = em.createQuery("SELECT U FROM USUARIO u WHERE u.CPF.CPF LIKE: cpf AND u.bairro LIKE: bairro");
        qry.setParameter("cpf", cpf);
        qry.setParameter("bairro",  "%" + bairro + "%");
        return qry.getResultList();
    }
    
}
