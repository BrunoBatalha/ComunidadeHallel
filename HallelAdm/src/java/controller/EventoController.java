package controller;

import javax.servlet.http.HttpSession;
import model.bean.Administrador;
import model.bean.Evento;
import model.dao.EventoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EventoController {

    @RequestMapping(value="addEvento", method = RequestMethod.POST)
    public String addEvento(Evento evt, HttpSession session) throws Exception {
        EventoDAO eDao = new EventoDAO();
        Integer id = (Integer)session.getAttribute("idAdm");
        Administrador adm = new Administrador(id);
        evt.setIdAdm(adm);
        eDao.salvarOuAtualizar(evt);
        return "menu/evento/adicionar";
    }
}
