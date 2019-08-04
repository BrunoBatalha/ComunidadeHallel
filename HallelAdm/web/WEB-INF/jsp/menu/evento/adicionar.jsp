
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Comunidade Hallel - Cadastro</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.css"/>" type="text/css">
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
                        de<br>evento</h3>
                </div>

            </div>

            <form method="post" action="addEvento"  >
                <div class="form-row d-flex justify-content-center">
                    <div class="form-group col-md-8 ">
                        <label class="font-weight-bold">Nome do evento<span class="text-wine font-weight-bold"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="text" placeholder="Digite o titulo do evento" name="nomeEvento">
                    </div>
                    <div class="form-group col-md-4 ">
                        <label class="font-weight-bold">Data<span class="text-wine font-weight-bold">
                                *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black form-control dataEv" type="text" name="dataEvento" id="dataEvento">
                    </div>
                    <div class="form-group col-md-7">
                        <label class="font-weight-bold">Local<span class="text-wine font-weight-bold"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="text" placeholder="Digite o endereço do evento" name="localEvento">
                    </div>
                    
                    <div class="form-group col-md-5">
                        <label class="font-weight-bold">Horário<span class="text-wine font-weight-bold horaEv"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="time" name="horaEvento">
                    </div>
                    <div class="form-group col-md-5">
                        <label class="font-weight-bold">Imagem<span class="text-wine font-weight-bold horaEv"> *</span></label>
                        <input class="form-control borda-inferior rounded-0 text-black" type="file" name="imagem">
                    </div>
                    <div class="form-group col-md-5">
                        <label class="font-weight-bold">Descrição<span class="text-wine font-weight-bold"> *</span></label>
                        <textarea  class="form-control borda-inferior rounded-0 text-black" type="text" placeholder="Digite uma descrição para o evento" name="descricaoEvento"></textarea>
                    </div>
                </div>
                
                <div class="form-group text-center">
                    <input type="submit" class="btn btn-black font-personalizada-2 text-uppercase rounded-0"
                           value="Finalizar" style="width: 20%">
                </div>
                
                <div class="form-group text-center py-3">
                    <a href="menuAdm" class="font-personalizada-2 text-black">Voltar a tela principal</a>
                </div>
            </form>
        </div>

        <%@include file="../../footer.jsp" %>

        <script type="text/javascript" src="<c:url value="/resources/js/jquery-3.4.0.min.js"/>"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script type="text/javascript" src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="http://digitalbush.com/wp-content/uploads/2014/10/jquery.maskedinput.js"></script>
        <script src="https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js"></script>
        <script>
            CKEDITOR.replace('descricaoEvento');
            CKEDITOR.config.height = '500'
            CKEDITOR.config.resize_enabled = false;
            CKEDITOR.config.toolbarCanCollapse = true;
        </script>
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
            jQuery(".dataEv").mask("99/99/9999");

        </script>
    </body>

</html>