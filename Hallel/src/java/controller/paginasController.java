package controller;

import model.bean.Pedidooracao;
import model.dao.PedidoOracaoDAO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class paginasController {
    
    @RequestMapping("/index")
    public ModelAndView index(){
        return new ModelAndView("index");
    }
    @RequestMapping("enviarPedido")
    public ModelAndView enviarPedido(Pedidooracao po) throws Exception{
        PedidoOracaoDAO pdao = new PedidoOracaoDAO();
        pdao.salvarOuAtualizar(po);
        return new ModelAndView("index");
    }
    
}
