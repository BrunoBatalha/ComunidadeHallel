<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Home</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!--        <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap/bootstrap.min.css"/>">-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="<c:url value="/resources/css/index.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/formularios.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/estilo.css"/>">
        <link rel="stylesheet" href="<c:url value="/resources/css/barraDeNavegacao.css"/>">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">

    </head>

    <body>
        <!-- Inicio do header -->
        <header class="container-fluid cabecalho">
            <!-- Barra de Navegação -->
            <nav class="row bg-wine h-100" style="background-color: #720100;">
                <!-- Imagem Comunidade Hallel -->
                <div class="col-md-3 mx-auto">
                    <img class="d-flex align-items-center my-4 mx-auto" src="<c:url value="/resources/img/nome-topo.png"/>" style="width: 200px;">
                </div>
            </nav>
        </header>
        <!-- Fim do header -->
        <!-- Fundo -->
        <!-- Fundo -->
        <div class="container-fluid fundo "></div>
        <!-- /Fundo -->
        <div class="container-fluid fundo">
            <div class="h-100 d-flex align-items-end " id="parteInferior">
                <div class="row w-100">
                    <div class="col-md-6 animacao-boasvindas" id="boasvindas">
                        <h1 class="text-uppercase text-white pb-4 pl-4 font-weight-bold">Bem vindo,<br>Administrador</h1>
                    </div>
                    <div class="col-md-6 mt-4 pl-sm-5">
                        <button class="btn btn-wine rounded-0 text-uppercase mx-4 animacao-botaoLogin" type="button"
                                id="btnFzrLogin">Fazer
                            login</button>
                        <a href="cadastro">
                            <button class="btn btn-outline-wine rounded-0 text-uppercase animacao-botaoCadastrar"
                                    type="button" id="btnCadastrar">Cadastrar-se</button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="d-none align-items-center justify-content-center h-100 animacao-login" id="telaLogin">
                <div id="voltar">
                    <button class="btn btn-outline-wine" type="button" style="width: 50px"><i
                            class="fas fa-backspace"></i></button>
                </div>
                <div class="quadradoEscuro">
                    <div class="bg-wine text-uppercase text-white d-flex align-items-center justify-content-center"
                         style="height: 50px;">
                        <h6>Fazer login</h6>
                    </div>
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <form method="post" class="w-75" action="logarAdm">
                            <div class="form-group ">
                                <label for="email">Email<span class="text-wine font-weight-bold"> *</span></label>
                                <input
                                    class="form-control text-white bg-transparent borda-inferior border-info border-white rounded-0"
                                    type="text" id="email" name="email" placeholder="Digite seu email">
                            </div>
                            <div class="form-group">
                                <label for="senha">Senha<span class="text-wine font-weight-bold"> *</span></label>
                                <input
                                    class="form-control text-white  bg-transparent borda-inferior border-info border-white rounded-0"
                                    type="password" id="senha" name="senha" placeholder="Digite sua senha">
                                <figcaption class="figure-caption text-right"><a href="#" class="text-white">Esqueceu sua
                                        senha?</a></figcaption>
                            </div>
                            <div class="form-group text-center pt-5">
                                <input class="btn btn-wine rounded-0" type="submit" value="LOGIN" style="width: 200px;font-family: 'Montserrat', sans-serif;
                                       letter-spacing: 0.2em">
                                <p class="pt-2"><a href="#" class="text-white pt-2">Não possui cadastro?</a></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>


        <!--        <script type="text/javascript" src="c:url value="/resources/js/jquery-3.4.0.min.js"/>"</script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script type="text/javascript" src="c:url value="/resources/js/bootstrap.min.js"/>"</script>-->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script type="text/javascript">
            $('#btnFzrLogin').on('click', function () {
                $('#boasvindas').addClass('animacao-boasvindas-hide');
                $('#btnFzrLogin, #btnCadastrar').addClass('animacao-botoes-hide');
                $('#telaLogin').addClass('animacao-login');
                setTimeout(function () {
                    $('#boasvindas').removeClass('animacao-boasvindas, animacao-boasvindas-hide');
                    $('#btnFzrLogin').removeClass('animacao-botaoLogin, animacao-botoes-hide');
                    $('#btnCadastrar').removeClass('animacao-botaoCadastrar, animacao-botoes-hide');

                    $('#parteInferior').removeClass('d-flex');
                    $('#parteInferior').addClass('d-none');

                    $('#telaLogin').removeClass('d-none');
                    $('#telaLogin').addClass('d-flex');
                    console.log('oi');
                }, 1000);
            })

            $('#voltar > button').on('click', function () {
                $('#telaLogin').addClass('animacao-login-hide');
                setTimeout(function () {
                    $('#boasvindas').addClass('animacao-boasvindas');
                    $('#btnFzrLogin').addClass('animacao-botaoLogin');
                    $('#btnCadastrar').addClass('animacao-botaoCadastrar');

                    $('#telaLogin').removeClass('d-flex');
                    $('#telaLogin').removeClass('animacao-login-hide');
                    $('#telaLogin').addClass('d-none');
                    $('#parteInferior').removeClass('d-none');
                    $('#parteInferior').addClass('d-flex');
                }, 1000);
            })
        </script>
    </body>

</html>