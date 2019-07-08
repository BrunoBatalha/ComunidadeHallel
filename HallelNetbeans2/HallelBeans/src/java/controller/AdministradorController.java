package controller;

import java.util.List;
import javax.servlet.http.HttpSession;
import javax.swing.JOptionPane;
import model.bean.Administrador;
import model.dao.AdministradorDAO;
import model.dao.GenericoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdministradorController {

    @RequestMapping("cadastrarAdm")
    public ModelAndView cadastrarAdm(Administrador adm) throws Exception {
        AdministradorDAO aDao = new AdministradorDAO();
        aDao.salvarOuAtualizar(adm);
        return new ModelAndView("cadastro");
    }

    @RequestMapping("logarAdm")
    public ModelAndView logarAdm(Administrador adm, HttpSession session) {
        AdministradorDAO aDao = new AdministradorDAO();
        List<Administrador> listAdm = aDao.obterTodos();

        for (Administrador a : listAdm) {
            if (a.getLogin().equals(adm.getLogin()) && a.getSenha().equals(adm.getSenha())) {
                session.setAttribute("admLogado", a.getId());
                return new ModelAndView("menuAdm");
            }
        }
        return new ModelAndView("index");
    }
}
