package controller;

import javax.servlet.http.HttpSession;
import javax.swing.JOptionPane;
import model.bean.Administrador;
import model.bean.Evento;
import model.dao.EventoDAO;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EventoController {

    @RequestMapping("cadastrarEvt")
    public ModelAndView cadastrarEvento(Evento evt, HttpSession session) throws Exception {
        EventoDAO eDao = new EventoDAO();
        Integer id = (Integer)session.getAttribute("admLogado");
        Administrador adm = new Administrador(id);
        JOptionPane.showConfirmDialog(null, id);
        evt.setIdAdm(adm);
        eDao.salvarOuAtualizar(evt);
        return new ModelAndView("menuAdm");
    }
}
