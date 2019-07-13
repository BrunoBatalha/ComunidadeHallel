package controller;

import javax.servlet.http.HttpSession;
import model.bean.Administrador;
import model.dao.AdministradorDAO;
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
    public ModelAndView logarAdm(Administrador adm, HttpSession session) {
        AdministradorDAO aDao = new AdministradorDAO();
        Administrador adm2 = aDao.obterLoginSenha(adm.getLogin(), adm.getSenha());
        if (adm2 != null) {
            session.setAttribute("idAdm", adm2.getId());
            session.setAttribute("loginAdm", adm2.getLogin());
            return new ModelAndView("menuAdm");
        }else{
            return new ModelAndView("index");
        }
        
    }
}
