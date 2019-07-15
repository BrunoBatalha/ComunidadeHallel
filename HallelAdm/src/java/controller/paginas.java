/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import javax.servlet.http.HttpSession;
import model.bean.Administrador;
import model.bean.Evento;
import model.dao.EventoDAO;
import model.dao.PedidoOracaoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class paginas {

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/cadastro")
    public String cadastro() {
        return "administrador/cadastro";
    }

    @RequestMapping("/menuAdm")
    public String menuAdm(Model model) {
        PedidoOracaoDAO pdao = new PedidoOracaoDAO();
        EventoDAO edao = new EventoDAO();
        model.addAttribute("pedidos", pdao.obterTodos());
        model.addAttribute("eventos", edao.obterTodos());
        return "menu/menuAdm";
    }

    @RequestMapping("/adicionar")
    public String adicionar() {
        return "menu/evento/adicionar";
    }

}
