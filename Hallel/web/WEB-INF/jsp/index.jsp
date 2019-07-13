<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Home</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="<c:url value="/resources/css/boostrap.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/index.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/barraDeNavegacao.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/rodape.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/carrossel.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/scroll.css"/>">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    </head>

    <body>
        <!-- Inicio do header -->
        <header class="container-fluid " style="background-color: #000000;">
            <div class="cabecalho row">

                <div class="col-md-4">

                </div>

                <!-- Imagem Comunidade Hallel -->
                <div class="col-md-4">
                    <center>
                        <br>
                        <img class="d-flex align-items-center" src="rsc/img/nome-topo.png" style="width: 200px;">
                        <br>
                    </center>
                </div>

                <!-- Redes sociais -->
                <div class="col-md-4">

                </div>

            </div>

            <!-- Barra de Navegação -->
            <nav class="barraNav navbar-expand-md" id="navbar">
                <!-- Recolher navbar -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#barraDeNavegacao">
                    <span class="fa fa-bars" style="color: white; font-size: 25px;"></span>
                </button>

                <div class="collapse navbar-collapse" id="barraDeNavegacao" style="color: white; font-size: 14px;">

                    <!-- Link da navbar -->

                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="#inicio">INÍCIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#associacao">ASSOCIAÇÃO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#eventos">EVENTOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#formacoes">FORMAÇÕES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#loja">LOJA</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
        <!-- Fim do header -->

        <!-- Início do home -->
        <div id="inicio" style="height: 65%;">
            <img src="rsc/img/fundo8.jpg" width="100%" height="100%" alt="fundo"
                 style="filter: grayscale(100%); z-index:0;">
        </div>

        <div style="background-color: rgb(0, 0, 0)">
            <div class="container">
                <center>
                    <br>
                    <br>

                    <p style="color: rgb(255, 255, 255); font-weight: regular; font-size: 24px; ">CARISMA</p>

                    <p class="descricao" style="color: rgb(255, 255, 255); font-weight: bold; font-size: 18px;"> REGATAR ALMAS PARA DEUS,
                        ATRAVÉS DO LOUVOR, DA FORMAÇÃO E DO AMOR POR EXCELÊNCIA.</p>

                    <br>
                    <br>
                </center>
            </div>

        </div>

        <div style="background-color: white" id="associacao">
            <div class="container">
                <center>
                    <br>
                    <br>

                    <p style="color: black; font-weight: bold; font-size: 24px; ">ASSOCIAÇÃO</p>

                    <p class="descricao" style="color: black; font-weight: regular; font-size: 18px;">TORNE-SE UM ASSOCIADO
                        DA
                        <em>COMUNIDADE HALLEL</em> E TENHA ACESSO À:</p>
                    <br>
                    <div class="row">

                        <div class="col-md-2">

                        </div>

                        <div class="col-md-4">

                            <div class="card text-center">
                                <div class="card-body">
                                    <br>
                                    <img src="rsc/img/laptop.png" alt="aula" height="150px" width="150px">
                                    <br>
                                    <p>ACESSO ILIMITADO AS
                                        <span style="color: #720100;">FORMAÇÕES</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <br>
                                    <img src="rsc/img/desconto.png" alt="aula" height="150px" width="150px">
                                    <br>
                                    <p>ÓTIMOS DESCONTOS NA
                                        <span style="color: #720100;">LOJA HALLEL</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-2">

                        </div>

                    </div>

                    <br>

                    <a href="pagamento.html" style="text-decoration: none;">
                        <input class="btnPadrao" type="button" value="ASSOCIAR-ME">
                    </a>

                    <br>
                    <br>
                </center>
            </div>

        </div>

        <div style="background-color: rgb(255, 255, 255)" id="eventos">
            <div class="container  pb-5">
                <div class="row pt-5">
                    <div class="col-md-6">
                        <p class="d-flex justify-content-start align-items-center" style="color: rgb(0, 0, 0)">
                            <button class="marcador"></button> &nbsp
                            <b>EVENTOS</b>
                        </p>
                    </div>

                    <div class="col-md-6">
                        <P class="d-flex justify-content-end align-items-center">
                            <button class="btnPadrao">Mostrar mais</button>
                        </P>
                    </div>
                </div>

                <div class="contain">
                    <div class="slider" style="height: 250px;">
                        <span onmouseover="scrollEsquerdaEventos()" onmouseout="clearScroll()"
                              class="handle handlePrev active">
                            <i class="my-auto fa fa-caret-left text-black" aria-hidden="true"></i>
                        </span>

                        <div id="sliderEventos" class="row h-100">
                            <div class="row__inner" id="exibe">
                                <div class="gui-card">
                                    <div class="flip-container " ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">

                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo.jpg">

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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo2.jpg">
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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo3.jpg">
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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo4.jpg">
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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo5.jpg">
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
                            <i class="my-auto fa fa-caret-right text-black" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

            </div>

        </div>

        <div style="background-color: white" id="formacoes">
            <div class="container pb-5">

                <div class="row pt-5">
                    <div class="col-md-6">
                        <p class="d-flex justify-content-start align-items-center" style="color: black">
                            <button class="marcador"></button> &nbsp
                            <b>FORMAÇÕES</b>
                        </p>
                    </div>

                    <div class="col-md-6">
                        <P class="d-flex justify-content-end align-items-center">
                            <button class="btnPadrao">Mostrar mais</button>
                        </P>
                    </div>
                </div>
                <div class="contain">
                    <div class="slider" style="height: 250px;">
                        <span onmouseover="scrollEsquerdaFormacoes()" onmouseout="clearScroll()"
                              class="handle handlePrev active">
                            <i class="my-auto fa fa-caret-left text-black" aria-hidden="true"></i>
                        </span>

                        <div id="sliderFormacoes" class="row h-100">
                            <div class="row__inner" id="exibe">
                                <div class="gui-card">
                                    <div class="flip-container " ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">

                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo.jpg">

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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo2.jpg">
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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo3.jpg">
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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo4.jpg">
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
                                    <div class="flip-container" ontouchstart="this.classList.toggle('hover')">
                                        <div class="flipper">
                                            <div class="front">
                                                <div class="gui-card__media aparecer">
                                                    <img class="gui-card__img objectImage" src="rsc/img/fundo5.jpg">
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
                        <span onmouseover="scrollDireitaFormacoes()" onmouseout="clearScroll()"
                              class="handle handleNext active">
                            <i class="my-auto fa fa-caret-right" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>

        </div>

        <div style="background-color: black" id="loja">

            <button class="marcadorMidia mt-5" id="marcadorEsquerdo"></button>

            <div class="container">
                <center>
                    <br>
                    <br>

                    <div class="row">

                        <div class="col-md-2">

                        </div>

                        <div class="col-md-3" id="radio">

                            <div class="cardPreto text-center">
                                <div class="card-body">
                                    <br>
                                    <img src="rsc/img/radio.png" alt="aula" height="150px" width="150px">
                                    <br>
                                    <p>
                                        <b>RÁDIO</b> HALLEL</span>
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div class="col-md-2">

                        </div>

                        <div class="col-md-3" id="tv">

                            <div class="cardPreto text-center">
                                <div class="card-body">
                                    <br>
                                    <img src="rsc/img/monitor.png" alt="aula" height="150px" width="150px">
                                    <br>
                                    <p>
                                        <b>TV</b> HALLEL</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-2">

                        </div>

                    </div>

                    <br>
                    <br>
                    <br>
                </center>
            </div>
            <p align="right">

                <button class="marcadorMidia mb-5" id="marcadorDireito"></button>
            </p>
        </div>

        <div style="background-color: rgb(255, 255, 255)" id="oracao">
            <div class="container">
                <center>
                    <br>
                    <br>

                    <p style="color: black; font-weight: bold; font-size: 24px; ">PEÇA UMA ORAÇÃO</p>

                </center>
                
                <form  method="post" action="enviarPedido">
                    <div class="row">
                        <div class="col-md-2">
                            <p></p>
                        </div>

                        <div class="col-md-8">
                            <p class="tituloInputs">Nome <span style="color: #720100">*</span><br>
                                <input class="input1" type="text" placeholder="Digite seu nome"  name="nome" required>
                            </p>
                        </div>
                        <div class="col-md-2"><p></p></div>
                        <div class="col-md-2"><p></p></div>
                        
                        <div class="col-md-8">
                            <p class="tituloInputs">Email <span style="color: #720100">*</span><br>
                                <input class="input1" type="email" placeholder="Digite seu email" name="email" required>
                            </p>
                        </div>

                        <div class="col-md-2"><p></p></div>
                        <div class="col-md-2"><p></p></div>
                        
                        <div class="col-md-8">
                            <p class="tituloInputs">Telefone <span
                                    style="color: rgb(189, 189, 189); font-weight: 100; letter-spacing: 0px;">(opcional)</span><br>
                                <input class="input1" type="tel" placeholder="Digite seu telefone"
                                       pattern="([0-9]{3})[0-9]{5}-[0-9]{4}" >
                            </p>
                        </div>

                        <div class="col-md-2"><p></p></div>
                        <div class="col-md-2"><p></p></div>

                        <div class="col-md-8">
                            <p class="tituloInputs">Seu pedido <span style="color: #720100">*</span><br>
                                <textarea class="text1" type="text" placeholder="Digite sua mensagem" name="mensagem" required></textarea>
                            </p>
                        </div>
                        <div class="col-md-2"><p></p></div>
                    </div>
                    <center>
                        <input type="submit" class="btnInverso" value="enviar">
                    </center>
                </form>


                <br>
                <br>

            </div>

        </div>


        <!-- Fim do home -->

        <!-- Inicio do Footer -->
        <footer class="page-footer font-small pt-3 rodape container-fluid">
            <br>
            <div class="row">
                <div class="col-md-6">
                    <!-- Content -->
                    <p style="color: #9F9F9F">CONHEÇA A COMUNIDADE</p>
                    <p>
                        <a href="#">Nossa história</a>
                    </p>
                    <p>
                        <a href="#">Visite-nos</a>
                    </p>
                </div>

                <div class="col-md-6 text-right">
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

        <script type="text/javascript" src="js/jquery-3.4.0.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
        <script type="text/javascript" src="js/scroll.js"></script>

    </body>
