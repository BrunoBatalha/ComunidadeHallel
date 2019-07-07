package controller;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
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
    public ModelAndView cadastrarAdm(Administrador adm) {
        AdministradorDAO aDao = new AdministradorDAO();
        try {
            aDao.salvarOuAtualizar(adm);
        } catch (Exception ex) {
            Logger.getLogger(AdministradorController.class.getName()).log(Level.SEVERE, null, ex);
        }
        return new ModelAndView("cadastro");
    }

    @RequestMapping("logarAdm")
    public ModelAndView logarAdm(Administrador adm) {
        AdministradorDAO aDao = new AdministradorDAO();
        List<Administrador> listAdm = aDao.obterTodos();
        
        for (Administrador a : listAdm) {
               JOptionPane.showMessageDialog(null, a.getLogin());
            if (a.getLogin().equals(adm.getLogin())
                    && a.getSenha().equals(adm.getSenha())) {
                    return new ModelAndView("menuAdm");
            }
        }
        return new ModelAndView("index");
    }
}
