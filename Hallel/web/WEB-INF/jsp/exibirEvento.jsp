<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Home</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/principal.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/barraDeNavegacao.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/rodape.css"/>">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    </head>

    <body>
    <!-- Inicio do header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Hallel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">In�cio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="associacao.html">Associa��o</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="formacoes.html">Forma��es</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="quemsomos.html">Quem somos?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="liturgiadiaria.html">Liturgia di�ria</a>
                </li>
            </ul>
            <span class="navbar-text">
                <a href="#"><button type="button" class="btn btn-light">Cadastrar</button></a>
                <a href="#"><button type="button" class="btn btn-outline-light" data-toggle="modal"
                        data-target="#exampleModal">Login</button></a>
            </span>
        </div>
    </nav>
    <!-- Fim do header -->

    <!-- Modal -->

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" style="margin-top: 5%">
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
                            <input type="text" class="form-control" id="inlineFormInputGroup"
                                placeholder="Insira seu nome de usu�rio">
                        </div>
                    </div>
                    <div class="col-auto">
                        <label class="sr-only" for="inlineFormInputGroup">Senha</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-key"></i></div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroup"
                                placeholder="Insira sua senha">
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
        <br>
        <center>
            <h3>Nome do evento</h3>
        </center>
        <br><br>

        <div class="row">

            <div class="col-md-4">
                <img src="resources/img/fundo9.jpg" class="img-responsive"
                    style="object-fit: cover; width: 100%; height: 200px;">
            </div>

            <div class="col-md-8">

                <p><b>Nome do evento:</b> ${evento.nomeEvento}</p>
                <p><b>Local:</b> ${evento.localEvento}</p>
                <p><b>Data:</b> ${evento.dataEvento}</p>

            </div>

        </div>

        <br>

        <div class="col-md-12">

            <p>${evento.descricaoEvento}</p>

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
        <script type="text/javascript" src="<c:url value="resources/js/principal.min.js"/>"></script>
        <script type="text/javascript" src="<c:url value="resources/js/scroll.min.js"/>"></script>
    </body>

</html>