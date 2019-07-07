package controller;

import java.util.List;
import javax.swing.JOptionPane;
import model.bean.Administrador;
import model.dao.AdministradorDAO;
import model.dao.GenericoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
    public ModelAndView logarAdm(Administrador adm) {
        AdministradorDAO aDao = new AdministradorDAO();
        List<Administrador> listAdm = aDao.obterTodos();
        for (Administrador administrador : listAdm) {
            if (administrador.getEmail().equals(adm.getEmail())
                    && administrador.getSenha().equals(adm.getSenha())) {
                    return new ModelAndView("menuAdm");
            }
        }
        return new ModelAndView("index");
    }
}
