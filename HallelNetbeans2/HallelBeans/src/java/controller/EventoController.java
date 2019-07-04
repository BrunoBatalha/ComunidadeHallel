package controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.swing.JOptionPane;
import model.bean.Evento;
import model.dao.EventoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EventoController {

    @RequestMapping("cadastrarEvt")
    public ModelAndView cadastrarAdm(Evento evt) throws ParseException {
        EventoDAO eDao = new EventoDAO();

      
        eDao.gravar(evt);
        return new ModelAndView("menuAdm");
    }

}
