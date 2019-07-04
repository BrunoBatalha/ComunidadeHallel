/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.ModelAndView;

@Controller
public class paginas  {
    @RequestMapping("/cadastro")
    public ModelAndView irCad(){
        return new ModelAndView("cadastro");
    }
    @RequestMapping("/index")
    public ModelAndView irIndex(){
        return new ModelAndView("index");
    }
    @RequestMapping("/menuAdm")
    public ModelAndView irMenuAdm(){
        return new ModelAndView("menuAdm");
    }
    @RequestMapping("/cadastroEvento")
    public ModelAndView irCadEvento(){
        return new ModelAndView("cadastroEvento");
    }
}
