
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Cadastro</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!--        <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.css"/>" type="text/css">-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="<c:url value="/resources/css/estilo.css"/>" type="text/css">
        <link rel="stylesheet" href="<c:url value="/resources/css/barraDeNavegacao.css"/>" type="text/css">
        <link rel="stylesheet" href="<c:url value="/resources/css/rodape.css"/>" type="text/css">
        <link rel="stylesheet" href="<c:url value="/resources/css/overlayFoto.css"/>" type="text/css">
        <link rel="stylesheet" href="<c:url value="/resources/css/formularios.css"/>" type="text/css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" >

    </head>

    <body>
        <!-- Inicio do header -->
        <header class="container-fluid">
            <!-- Barra de Navegação -->
            <nav class="row bg-wine h-100" style="background-color: #720100;">
                <!-- Imagem Comunidade Hallel -->
                <div class="col-md-3 mx-auto">
                    <img class="d-flex align-items-center my-4 mx-auto" src="<c:url value="/resources/img/nome-topo.png"/>" style="width: 200px;">
                </div>
            </nav>
        </header>
        <!-- Fim do header -->
        <div class="container">
            <div class="row">

                <div class="col-md-12">
                    <h3 class="text-uppercase text-center font-weight-bold font-personalizada-4 py-5">Cadastro
                        de<br>administrador</h3>
                </div>

                <div class="col-md-12 d-flex justify-content-center">
                    <div class="col-md-5">
                        <label class="font-weight-bold">Tipo<span class="text-wine font-weight-bold"> *</span></label>
                        <select class="form-control rounded-0 borda-inferior">
                            <option selected>Selectione o tipo...</option>
                            <option>Tipo 2</option>
                            <option>Tipo 3</option>
                            <option>Tipo 4</option>
                        </select>
                    </div>
                </div>

                <div class="col-md-12 text-center">
                    <figure class="figure">
                        <h6 class="text-uppercase font-personalizada-4 py-5 font-weight-bold text-wine">Dados pessoais</h6>
                        <div id="localAlteracao">
                            <img src="<c:url value="/resources/img/perfil.png"/>" class="figure-img img-fluid rounded-circle" id="fotoPerfil" width="300px" height="300px">

                            <div id="labelAlterar" class="rounded-circle d-flex align-items-center justify-content-center">
                                <label class="btn btn-black" for='inputArquivo'>Alterar foto de perfil</label>
                                <input type="file" class="open" id="inputArquivo" accept="image/png, image/jpeg"
                                       name="inputArquivo">
                            </div>
                        </div>
                    </figure>
                </div>

            </div>

            <form method="post" action="cadastrarAdm">
                <div class="form-row">
                    <div class="form-group col-md-8 ">
                        <label class="font-weight-bold">Nome<span class="text-wine font-weight-bold"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="text" placeholder="Digite seu nome" name="nome">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label class="font-weight-bold">Data de nascimento<span class="text-wine font-weight-bold">
                                *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="date">
                    </div>
                    <div class="form-group col-md-7">
                        <label class="font-weight-bold">Email<span class="text-wine font-weight-bold"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="text" placeholder="Digite seu email" name="email">
                    </div>
                    <div class="form-group col-md-5">
                        <label class="font-weight-bold">Telefone<span class="text-wine font-weight-bold"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="text" placeholder="Digite seu telefone">
                    </div>
                </div>
                <div class="form-group text-center">
                    <h6 class="text-uppercase font-personalizada-4 py-3 font-weight-bold text-wine">Dados de acesso</h6>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="font-weight-bold">Senha<span class="text-wine font-weight-bold"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="password" placeholder="Digite sua senha" name="senha">
                        <figcaption class="figure-caption text-wine">Sua senha deve conter no minímo 6 dígitos</figcaption>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="font-weight-bold">Confirmar senha<span class="text-wine font-weight-bold">
                                *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="password"
                               placeholder="Confirme sua senha">
                        <figcaption class="figure-caption text-wine">Sua senha deve conter no minímo 6 dígitos</figcaption>
                    </div>
                </div>
                <div class="form-group  pt-5 ml-3">
                    <input class="form-check-input rounded-0 " type="checkbox" id="checkPolitica">
                    <label class="form-check-label" for="checkPolitica">
                        Asseguro a veracidade dos dados informados nesse formulário e me afirmo conhecedor dos <a href="#"
                                                                                                                  class="text-wine">termos de uso</a>
                        e da <a href="#" class="text-wine">política de responsabilidade</a> da Comunidade Hallel.
                    </label>
                </div>
                <div class="form-group text-center">
                    <input type="submit" class="btn btn-black font-personalizada-2 text-uppercase rounded-0"
                           value="Finalizar" style="width: 20%">
                </div>
                <div class="form-group text-center py-3">
                    <a href="index.html" class="font-personalizada-2 text-black">Voltar a tela principal</a>
                </div>
            </form>
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
        <script type="text/javascript" src="<c:url value="/resources/js/jquery-3.4.0.min.js"/>"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
        <script type="text/javascript">
            function enviar_imagem(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#fotoPerfil').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            }
            $("#inputArquivo").change(function () {
                enviar_imagem(this);
            });
        </script>
    </body>

</html>