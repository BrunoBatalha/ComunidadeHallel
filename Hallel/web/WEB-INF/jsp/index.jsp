<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Home</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="<c:url value="resources/css/bootstrap.css"/>">
        <link rel="stylesheet" href="<c:url value="resources/css/index.css"/>">
        <link rel="stylesheet" href="<c:url value="resources/css/barraDeNavegacao.css"/>">
        <link rel="stylesheet" href="<c:url value="resources/css/rodape.css"/>">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    </head>

    <body>
    <!-- Inicio do header -->
    <header class="container-fluid" style="background-color: #ffffff;">
        <div class="cabecalho row">

            <div class="col-md-4">



            </div>

            <!-- Imagem Comunidade Hallel -->
            <div class="col-md-4">
                <center>
                    <br>
                    <img class="d-flex align-items-center" src="rsc/img/hallelpreto.jpg" style="width: 170px; margin-bottom: 20px">
                    <br>
                </center>
            </div>

            <!-- Redes sociais -->
            <div class="col-md-4">

                <table style="height: 100%;">
                    <tbody>
                        <tr>

                            <td class="align-middle">

                                <a href="#"><button type="button" class="btn btn-dark">Cadastrar</button></a>
                                <a href="#"><button type="button" class="btn btn-outline-dark" data-toggle="modal"
                                    data-target="#exampleModal">Login</button></a>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

        <!-- Barra de Navega��o -->
        <nav class="barraNav navbar-expand-md" id="navbar">
            <!-- Recolher navbar -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#barraDeNavegacao">
                <span class="fa fa-bars" style="color: rgb(0, 0, 0); font-size: 25px;"></span>
            </button>

            <div class="collapse navbar-collapse" id="barraDeNavegacao" style="color: white; font-size: 14px;">

                <!-- Link da navbar -->

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link nav-i" href="#">IN�CIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-i" href="associacao.html">ASSOCIA��O</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-i" href="formacoes.html">FORMA��ES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-i" href="evento.html">EVENTOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-i" href="quemsomos.html">QUEM SOMOS?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-i" href="liturgiadiaria.html">LITURGIA DI�RIA</a>
                    </li>

                </ul>


            </div>

        </nav>
    </header>
    <!-- Fim do header -->

    <!-- Modal -->

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="margin-top: 5%">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">Nome de usu�rio</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-user"></i></div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Insira seu nome de usu�rio">
                        </div>
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">Senha</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-key"></i></div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Insira sua senha">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <a href="principal.html"><button type="button" class="btn btn-primary">Login</button></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Fim do modal -->

    <!-- In�cio do home -->

    <br>

    <div class="container">

        <div class="row">

            <div class="col-md-6 col-sem-margem col-lateral-direita">
                <a href="exibirEvento.html">
                    <div class="zoom">
                        <img src="rsc/img/fundo9.jpg" class="img-responsive cortar1">
                        <div class="text-item">
                            <span class="marcador">Not�cia</span>
                            <p class="titulo-imagens">Louvor a Deus</p>
                            <p class="descricao-imagens">Descricao bacana que nos inspira a louvar a Deus e agradecer e essas coisas. Am�m.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-md-6 col-sem-margem ">

                <div class="col-md-12 col-sem-margem">
                    <div class="zoom mx-auto">
                        <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                        <div class="text-item">

                        </div>
                    </div>
                </div>


                <div class="col-md-12 col-margem col-sem-margem-bottom">
                    <div class="row">
                        <div class="col-md-6 col-margem col-sem-margem-bottom col-lateral-esquerda">
                            <div class="zoom">
                                <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                                <div class="text-item">

                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 col-margem col-sem-margem-bottom">
                            <div class="zoom">
                                <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                                <div class="text-item">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <br>

        <div class="row">

            <div class="col-md-9">

                <p class="titulo">Eventos</p>

                <div class="row">

                    <div class="col-md-3 col-borda-menor">

                        <a href="#">
                            <div class="zoom">
                                <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                                <div class="text-item">
                                    <p>kjskfhasj</p>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div class="col-md-3 col-borda-menor">


                        <div class="zoom">
                            <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                            <div class="text-item">
                                <p>kjskfhasj</p>
                            </div>
                        </div>


                    </div>
                    <div class="col-md-3 col-borda-menor">


                        <div class="zoom">
                            <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                            <div class="text-item">
                                <p>kjskfhasj</p>
                            </div>
                        </div>


                    </div>
                    <div class="col-md-3 col-borda-menor">


                        <div class="zoom">
                            <img src="rsc/img/fundo9.jpg" class="img-responsive cortar2">
                            <div class="text-item">
                                <p>kjskfhasj</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            <div class="col-md-3">

                <p class="titulo">Mais pr�ximos</p>

                <div class="prox-evento">

                    <p class="tituloevento"><b>Retiro dos papas</b></p>
                    <p class="local">Local: S�tio dos empoderados</p>
                    <p class="data">Data: 25/08/2019</p>

                </div>

                <div class="prox-evento">

                    <p class="tituloevento"><b>Retiro dos papas</b></p>
                    <p class="local">Local: S�tio dos empoderados</p>
                    <p class="data">Data: 25/08/2019</p>

                </div>

                <div class="prox-evento">

                    <p class="tituloevento"><b>Retiro dos papas</b></p>
                    <p class="local">Local: S�tio dos empoderados</p>
                    <p class="data">Data: 25/08/2019</p>

                </div>

            </div>
        </div>

        <br>

        <div class="row">

            <div class="col-md-12">

                <p class="titulo">Forma��es</p>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="rsc/img/fundo9.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="rsc/img/fundo9.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="rsc/img/fundo9.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div>

        <br>

        <div class="row">



            <div class="col-md-9">

                <div class="titulo">Pedidos de ora��o</div>


                <br>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Nome</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Insira seu nome">
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Insira seu email (Ex: nome@exemplo.com)">
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Seu pedido</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-info">Enviar</button>

                </form>

            </div>

            <div class="col-md-3">

                <p class="titulo">Doa��es</p>

            </div>

        </div>
    </div>



    <br>

    <!-- Fim do home -->

    <!-- Inicio do Footer -->
    <footer class="page-footer font-small pt-3 rodape container-fluid">
        <br>
        <div class="row">
            <div class="col-md-4">
                <!-- Content -->
                <p style="color: #9F9F9F">CONHE�A A COMUNIDADE</p>
                <p>
                    <a href="#">Nossa hist�ria</a>
                </p>
                <p>
                    <a href="#">Visite-nos</a>
                </p>
            </div>

            <div class="col-md-4">

                <center>
                    <br>
                    <img class="d-flex align-items-center" src="rsc/img/hallelbranco.jpg" style="width: 100px;">
                    <br>
                </center>

            </div>

            <div class="col-md-4 text-right">
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


        <script type="text/javascript" src="<c:url value="resources/js/jquery-3.4.0.min.js"/>"></script>
        <script type="text/javascript" src="<c:url value="resources/js/bootstrap.min.js"/>"></script>
        <script type="text/javascript" src="<c:url value="resources/js/index.min.js"/>"></script>
        <script type="text/javascript" src="<c:url value="resources/js/scroll.min.js"/>"></script>
    </body>

</html>