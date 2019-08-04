package controller;

import java.util.List;
import model.bean.Evento;
import model.bean.Pedidooracao;
import model.dao.EntidadeBase;
import model.dao.EventoDAO;
import model.dao.GenericoDAO;
import model.dao.PedidoOracaoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class paginasController {

    @RequestMapping("/index")
    public ModelAndView index(Model model) {
        EventoDAO edao = new EventoDAO();
        model.addAttribute("eventos", edao.obterTodos());
        return new ModelAndView("index");
    }

    @RequestMapping("enviarPedido")
    public ModelAndView enviarPedido(Pedidooracao po) throws Exception {
        PedidoOracaoDAO pdao = new PedidoOracaoDAO();
        pdao.salvarOuAtualizar(po);
        return new ModelAndView("index");
    }

    @RequestMapping("exibirEvento")
    public ModelAndView exibirEvento(Model model, Integer id) {
        GenericoDAO<Evento> gEvt = new GenericoDAO<>();
        Evento evt = gEvt.buscarId(Evento.class, id);
        model.addAttribute("evento", evt);
        return new ModelAndView("exibirEvento");
    }

    @RequestMapping("/principal")
    public ModelAndView principal(Model model) {
        return new ModelAndView("principal");
    }
}
