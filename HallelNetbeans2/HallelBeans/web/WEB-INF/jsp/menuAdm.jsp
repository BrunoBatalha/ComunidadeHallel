<%@page import="java.util.List"%>
<%@page import="model.bean.Evento"%>
<%@page import="model.dao.EventoDAO"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Cadastro</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!--    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="<c:url value="/resources/css/index.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/formularios.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/estilo.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/barraDeNavegacao.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/rodape.css"/>" type="text/css">
        <link rel="stylesheet" href="<c:url value="/resources/css/menuAdm.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/scroll.css"/>">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    </head>

    <body>
        <!-- Inicio do header -->
        <header class="container-fluid">
            <!-- Barra de Navegação -->
            <nav class="row bg-wine h-100" style="background-color: #720100;">
                <!-- Imagem Comunidade Hallel -->
                <div class="col-md-3 mx-auto">
                    <img class="d-flex align-items-center my-4 mx-auto" src="<c:url value="/resources/img/nome-topo.png"/>"  style="width: 200px;">
                </div>
            </nav>
        </header>
        <!-- Fim do header -->

        <div class="container-fluid">

            <div>
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center pt-5">
                        <img src="<c:url value="/resources/img/perfil.png"/>" class="rounded-circle img-fluid">
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        <h2 class="text-uppercase font-personalizada-4 font-weight-bold">Bem vindo, xxx</h2>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        <p class="font-personalizada-2">
                            ESSE É SEU PAINEL DE ADMINISTRAÇÃO!
                        </p>
                    </div>
                </div>
            </div>

            <div class="menu-tabs ">
                <div class="row ">
                    <div class="col-md-12">
                        <nav class="d-flex justify-content-center">
                            <div class="nav nav-tabs nav-fill w-75 " id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                   href="#nav-eventos"><span class="text-black">Eventos</span></a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                   href="#nav-formacoes"><span class="text-black">Formações</span></a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-blog"><span
                                        class="text-black">Blog</span></a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
                                   href="#nav-pedidoOracao"><span class="text-black">Pedido de oração</span></a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="row bg-black mt-5 mb-5" style="background-color: #000">
                    <div class="container">
                        <div class="tab-content" id="nav-tabContent">

                            <div class="tab-pane fade show active " id="nav-eventos" role="tabpanel"
                                 aria-labelledby="nav-home-tab">



                                <div class="container  pb-5">



                                    <div class="row pt-5">
                                        <div class="col-md-6">
                                            <p class="d-flex justify-content-start align-items-center">
                                                <span class="retangulo "></span>
                                                <b class="text-white pl-3 text-uppercase font-personalizada-4">
                                                    Eventos adicionados
                                                </b>
                                            </p>
                                        </div>

                                        <div
                                            class="col-sm-6 d-flex justify-content-start justify-content-sm-end align-items-center">
                                            <P class="d-flex justify-content-end align-items-center">
                                                <a href="cadastroEvento">
                                                    <button class="btn btn-outline-wine rounded-0 text-uppercase animacao-botaoCadastrar"
                                                            type="button" id="btnCadastrar" style="color: white;">Cadastrar evento</button>
                                                </a>

                                            </P>
                                        </div>
                                    </div>

                                    <div class="contain">
                                        <div class="slider" style="height: 250px;">
                                            <span onmouseover="scrollEsquerdaEventos()" onmouseout="clearScroll()"
                                                  class="handle handlePrev active">
                                                <i class="my-auto fa fa-chevron-left text-white" aria-hidden="true"></i>
                                            </span>

                                            <div id="sliderEventos" class="row h-100">
                                                <div class="row__inner" id="exibe">

                                                    <%
                                                        EventoDAO eDao = new EventoDAO();
                                                        List<Evento> listEvento = eDao.obterTodos();

                                                        for (Evento eventos : listEvento) {

                                                    %>

                                                    <div class="gui-card">
                                                        <div class="flip-container "
                                                             ontouchstart="this.classList.toggle('hover')">
                                                            <div class="flipper">
                                                                <div class="front">
                                                                    <div class="gui-card__media aparecer">

                                                                        <img class="gui-card__img objectImage"
                                                                             src="<c:url value="/resources/img/fundo.jpg"/>">

                                                                        <button class="btn btn-wine overlay-edit rounded-0"
                                                                                title="Editar">
                                                                            <i class="fas fa-edit"></i>
                                                                        </button>

                                                                        <div class="overlay">

                                                                            <p class="dadosCard">
                                                                                Nome: <%= eventos.getTitulo()%><br>
                                                                                Descrição: <%= eventos.getDescricao()%><br>
                                                                                Data: <%= eventos.getDataEv()%>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <%

                                                        }

                                                    %>

                                                </div>
                                            </div>

                                            <span onmouseover="scrollDireitaEventos()" onmouseout="clearScroll()"
                                                  class="handle handleNext active">
                                                <i class="my-auto fa fa-chevron-right text-white" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-formacoes" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div class="tab-pane fade show active " id="nav-formacoes" role="tabpanel"
                                     aria-labelledby="nav-home-tab">
                                    <div class="container  pb-5">
                                        <div class="row pt-5">
                                            <div class="col-sm-6">
                                                <p class="d-flex justify-content-start align-items-center">
                                                    <span class="retangulo "></span>
                                                    <b class="text-white pl-3 text-uppercase font-personalizada-4">
                                                        Formações adicionadas
                                                    </b>
                                                </p>
                                            </div>

                                            <div
                                                class="col-sm-6 d-flex justify-content-start justify-content-sm-end align-items-center">
                                                <p>
                                                    <button class="btn btn-wine font-personalizada-2 rounded-0">Mostrar
                                                        mais</button>
                                                </p>

                                            </div>
                                        </div>

                                        <div class="contain">
                                            <div class="slider" style="height: 250px;">
                                                <span onmouseover="scrollEsquerdaEventos()" onmouseout="clearScroll()"
                                                      class="handle handlePrev active">
                                                    <i class="my-auto fa fa-chevron-left text-white" aria-hidden="true"></i>
                                                </span>

                                                <div id="sliderEventos" class="row h-100">
                                                    <div class="row__inner" id="exibe">
                                                        <div class="gui-card">
                                                            <div class="flip-container "
                                                                 ontouchstart="this.classList.toggle('hover')">
                                                                <div class="flipper">
                                                                    <div class="front">
                                                                        <div class="gui-card__media aparecer">

                                                                            <img class="gui-card__img objectImage"
                                                                                 src="rsc/img/fundo.jpg">

                                                                            <button
                                                                                class="btn btn-wine overlay-edit rounded-0"
                                                                                title="Editar">
                                                                                <i class="fas fa-edit"></i>
                                                                            </button>

                                                                            <div class="overlay">

                                                                                <p class="tituloCard">
                                                                                    O louvor como oração
                                                                                </p>
                                                                                <p class="dadosCard">
                                                                                    17 aulas
                                                                                    <br> Status: completo
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gui-card">
                                                            <div class="flip-container"
                                                                 ontouchstart="this.classList.toggle('hover')">
                                                                <div class="flipper">
                                                                    <div class="front">
                                                                        <div class="gui-card__media aparecer">
                                                                            <img class="gui-card__img objectImage"
                                                                                 src="rsc/img/fundo2.jpg">
                                                                            <button
                                                                                class="btn btn-wine overlay-edit rounded-0"
                                                                                title="Editar">
                                                                                <i class="fas fa-edit"></i>
                                                                            </button>
                                                                            <div class="overlay">
                                                                                <p class="tituloCard">
                                                                                    O louvor como oração
                                                                                </p>
                                                                                <p class="dadosCard">
                                                                                    17 aulas
                                                                                    <br> Status: completo
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gui-card">
                                                            <div class="flip-container"
                                                                 ontouchstart="this.classList.toggle('hover')">
                                                                <div class="flipper">
                                                                    <div class="front">
                                                                        <div class="gui-card__media aparecer">
                                                                            <img class="gui-card__img objectImage"
                                                                                 src="rsc/img/fundo3.jpg">
                                                                            <button
                                                                                class="btn btn-wine overlay-edit rounded-0"
                                                                                title="Editar">
                                                                                <i class="fas fa-edit"></i>
                                                                            </button>
                                                                            <div class="overlay">
                                                                                <p class="tituloCard">
                                                                                    O louvor como oração
                                                                                </p>
                                                                                <p class="dadosCard">
                                                                                    17 aulas
                                                                                    <br> Status: completo
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <span onmouseover="scrollDireitaEventos()" onmouseout="clearScroll()"
                                                      class="handle handleNext active">
                                                    <i class="my-auto fa fa-chevron-right text-white"
                                                       aria-hidden="true"></i>
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-blog" role="tabpanel" aria-labelledby="nav-contact-tab">
                                terceiro
                            </div>
                            <div class="tab-pane fade" id="nav-pedidoOracao" role="tabpanel"
                                 aria-labelledby="nav-contact-tab">
                                quarto
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>


        <!-- Inicio do Footer -->
        <footer class="page-footer font-small pt-3 rodape container-fluid">
            <br>
            <div class="row ">
                <div class="col-md-6 text-center text-md-left">
                    <!-- Content -->
                    <p style="color: #9F9F9F">CONHEÇA A COMUNIDADE</p>
                    <p>
                        <a href="#">Nossa história</a>
                    </p>
                    <p>
                        <a href="#">Visite-nos</a>
                    </p>
                </div>

                <div class="col-md-6 text-center text-md-right">
                    <p style="color: #9F9F9F">CONTATOS</p>
                    <p>
                        comunidadehallel95@gmail.com
                        <i class="fas fa-envelope"></i>
                    </p>
                    <p>
                        (92) 3085-1787
                        <span class="fa fa-phone"></span>
                    </p>
                </div>
            </div>
            <br>
        </footer>
        <!-- Fim do Footer -->
        <!--        <script type="text/javascript" src="c:url value="/resources/js/jquery-3.4.0.min.js"/>"</script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script type="text/javascript" src="c:url value="/resources/js/bootstrap.min.js"/>"</script>-->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script type="text/javascript" src="<c:url value="/resources/js/scroll.js"/>"></script>
    </body>

</html>