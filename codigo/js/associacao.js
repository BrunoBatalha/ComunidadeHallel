//Form para cadastro de associados



$(document).ready(function () {

    $('.form-wizard-wrapper').find('.form-wizard-link').click(function () {
        $('.form-wizard-link').removeClass('active');
        var innerWidth = $(this).innerWidth();
        $(this).addClass('active');
        var position = $(this).position();
        $('.form-wizardmove-button').css({
            "left": position.left,
            "width": innerWidth
        });
        var attr = $(this).attr('data-attr');
        $('.form-wizard-content').each(function () {
            if ($(this).attr('data-tab-content') == attr) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });
    $('.form-wizard-next-btn').click(function () {
        var next = $(this);
        next.parents('.form-wizard-content').removeClass('show');
        next.parents('.form-wizard-content').next('.form-wizard-content').addClass('show');
        $(document).find('.form-wizard-content').each(function () {
            if ($(this).hasClass('show')) {
                var formAtrr = $(this).attr('data-tab-content');
                $(document).find('.form-wizard-wrapper li a').each(function () {
                    if ($(this).attr('data-attr') == formAtrr) {
                        $(this).addClass('active');
                        var innerWidth = $(this).innerWidth();
                        var position = $(this).position();
                        $(document).find('.form-wizardmove-button').css({
                            "left": position.left,
                            "width": innerWidth
                        });
                    } else {
                        $(this).removeClass('active');
                    }
                });
            }
        });
    });
    $('.form-wizard-previous-btn').click(function () {
        var prev = $(this);
        prev.parents('.form-wizard-content').removeClass('show');
        prev.parents('.form-wizard-content').prev('.form-wizard-content').addClass('show');
        $(document).find('.form-wizard-content').each(function () {
            if ($(this).hasClass('show')) {
                var formAtrr = $(this).attr('data-tab-content');
                $(document).find('.form-wizard-wrapper li a').each(function () {
                    if ($(this).attr('data-attr') == formAtrr) {
                        $(this).addClass('active');
                        var innerWidth = $(this).innerWidth();
                        var position = $(this).position();
                        $(document).find('.form-wizardmove-button').css({
                            "left": position.left,
                            "width": innerWidth
                        });
                    } else {
                        $(this).removeClass('active');
                    }
                });
            }
        });
    });
    $('.salvar').click(function () {
        criar()
    });

    $('#input-outro-valor').hide();
    $('#quota-minima-2').hide();
    document.getElementById("texto-outro-valor").style.display = 'none';
    $('#contribuicao-ass').change(function () {
        if ($('#contribuicao-ass').val() == 'Outro valor') {
            $('#input-outro-valor').show();
            $('#quota-minima-2').show();
            document.getElementById("texto-outro-valor").style.display = 'block';
        } else {
            $('#input-outro-valor').hide();
            $('#quota-minima-2').hide();
            document.getElementById("texto-outro-valor").style.display = 'none';
        }
    });
});


//Cadastro de associados

var refAss = rootRef.child("associados")

var database = firebase.database();

function criar() {

    var e = document.getElementById("contribuicao-ass");
    var valorcontribuicao = e.options[e.selectedIndex].text;

    if (valorcontribuicao == 'R$20,00') {
        valorcontribuicao = 20
    }
    if (valorcontribuicao == 'R$30,00') {
        valorcontribuicao = 30
    }
    if (valorcontribuicao == 'RS40,00') {
        valorcontribuicao == 40
    }
    if (valorcontribuicao == 'R$50,00') {
        50
    }
    if (valorcontribuicao == 'Outro valor' && $('#input-outro-valor').val() > 20) {
        valorcontribuicao = $('#input-outro-valor').val()
    } else {
        $('#input-outro-valor').hide();
        valorcontribuicao = 20
    }

    var associado = {
        primeiroNome: $('#primeiro-nome-ass').val(),
        segundoNome: $('#primeiro-nome-ass').val(),
        email: $('#email-ass').val(),
        telefone: $('#telefone-ass').val(),
        cpf: $('#cpf-ass').val(),
        rg: $('#rg-ass').val(),
        datadenascimento: $('#dataNasc-ass').val(),
        profissao: $('#profissao-ass').val(),
        nacionalidade: $('#nacionalidade-ass').val(),
        naturalidade: $('#naturalidade-ass').val(),
        cep: $('#cep-ass').val(),
        rua: $('#rua-ass').val(),
        bairro: $('#bairro-ass').val(),
        cidade: $('#cidade-ass').val(),
        estado: $('#estado-ass').val(),
        senha: $('#senha-ass').val(),
        numerocartao: $('#nmrCartao-ass').val(),
        validade: $('#validade-ass').val(),
        CVV: $('#CVV-ass').val(),

    }

    if (associado.senha.length >= 6) {

        if (associado.senha == $('#confirmeSenha-ass').val()) {

            //cria usuário no authentication
            firebase.auth()
                .createUserWithEmailAndPassword(associado.email, associado.senha)
                .then(function (result) {

                    // faz login no authentication
                    firebase.auth().signInWithEmailAndPassword(associado.email, associado.senha)
                    .then(function(result) {
                        const refAss = rootRef.child('administradores').orderByChild('email').equalTo(associado.email)
                        refAss.once('child_added', snap => {
                            const nomeAssociado = snap.val().nome
                            window.sessionStorage.setItem('nome_associado', nomeAssociado);
                        })
            
                    })
                    .catch(function(error) {
                        alert("Não foi possível concluir o login: " + error.message)
                    });
                    
                    //cria nó no database
                    rootRef.child("associados").child(associado.cpf).set({
                        primeiroNome: associado.primeiroNome,
                        segundoNome: associado.segundoNome,
                        email: associado.email,
                        telefone: associado.telefone,
                        cpf: associado.cpf,
                        rg: associado.rg,
                        datadenascimento: associado.datadenascimento,
                        profissao: associado.profissao,
                        nacionalidade: associado.nacionalidade,
                        naturalidade: associado.naturalidade,
                        cep: associado.cep,
                        rua: associado.rua,
                        bairro: associado.bairro,
                        cidade: associado.cidade,
                        estado: associado.estado,
                        senha: associado.senha,
                        numero: associado.numerocartao,
                        validade: associado.validade,
                        CVV: associado.CVV,
                        contribuicao: `R$${valorcontribuicao}`
                    });
                    console.log("Cadastro realizado com sucesso!");
                    window.location.href = "index.html";
                })
                .catch(function (error) {
                    alert("Não foi possível concluir o cadastro: " + error.message)
                });
        } else {
            alert("As senhas não coincidem!");
        }

    } else {
        console.log("Senha muito pequena.")
    }


}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua-ass').value = ("");
    document.getElementById('bairro-ass').value = ("");
    document.getElementById('cidade-ass').value = ("");
    document.getElementById('estado-ass').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua-ass').value = (conteudo.logradouro);
        document.getElementById('bairro-ass').value = (conteudo.bairro);
        document.getElementById('cidade-ass').value = (conteudo.localidade);
        document.getElementById('estado-ass').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua-ass').value = "...";
            document.getElementById('bairro-ass').value = "...";
            document.getElementById('cidade-ass').value = "...";
            document.getElementById('estado-ass').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};