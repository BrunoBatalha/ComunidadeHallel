package controller;

import javax.servlet.http.HttpSession;
import model.bean.Administrador;
import model.dao.AdministradorDAO;
import model.dao.EventoDAO;
import model.dao.PedidoOracaoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdministradorController {

    @RequestMapping("cadastrarAdm")
    public String cadastrarAdm(Administrador adm) throws Exception {
        AdministradorDAO aDao = new AdministradorDAO();
        aDao.salvarOuAtualizar(adm);
        return "cadastrarAdministrador/cadastro";
    }

    @RequestMapping("logarAdm")
    public String logarAdm(Administrador adm, HttpSession session, Model model) {
        AdministradorDAO aDao = new AdministradorDAO();
        Administrador adm2 = aDao.obterLoginSenha(adm.getLogin(), adm.getSenha());
        if (adm2 == null) {
            return "index";
        } else {
            session.setAttribute("idAdm", adm2.getId());
            session.setAttribute("loginAdm", adm2.getLogin());

            PedidoOracaoDAO pdao = new PedidoOracaoDAO();
            EventoDAO edao = new EventoDAO();
            model.addAttribute("pedidos", pdao.obterTodos());
            model.addAttribute("eventos", edao.obterTodos());
            return "menu/menuAdm";
        }

    }
}
