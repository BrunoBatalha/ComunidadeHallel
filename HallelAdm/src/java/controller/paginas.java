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
import org.springframework.stereotype.Controller;
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
    public String menuAdm() {
        return "menu/menuAdm";
    }

    @RequestMapping("/adicionar")
    public String adicionar() {
        return "menu/evento/adicionar";
    }
   
}
