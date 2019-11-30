//Form para cadastro de associados



$(document).ready(function() {

    $('.form-wizard-wrapper').find('.form-wizard-link').click(function() {
        $('.form-wizard-link').removeClass('active');
        var innerWidth = $(this).innerWidth();
        $(this).addClass('active');
        var position = $(this).position();
        $('.form-wizardmove-button').css({
            "left": position.left,
            "width": innerWidth
        });
        var attr = $(this).attr('data-attr');
        $('.form-wizard-content').each(function() {
            if ($(this).attr('data-tab-content') == attr) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });
    $('.form-wizard-next-btn').click(function() {
        var next = $(this);
        next.parents('.form-wizard-content').removeClass('show');
        next.parents('.form-wizard-content').next('.form-wizard-content').addClass('show');
        $(document).find('.form-wizard-content').each(function() {
            if ($(this).hasClass('show')) {
                var formAtrr = $(this).attr('data-tab-content');
                $(document).find('.form-wizard-wrapper li a').each(function() {
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
    $('.form-wizard-previous-btn').click(function() {
        var prev = $(this);
        prev.parents('.form-wizard-content').removeClass('show');
        prev.parents('.form-wizard-content').prev('.form-wizard-content').addClass('show');
        $(document).find('.form-wizard-content').each(function() {
            if ($(this).hasClass('show')) {
                var formAtrr = $(this).attr('data-tab-content');
                $(document).find('.form-wizard-wrapper li a').each(function() {
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
    $('.salvar').click(function() {
        criar()
    });

    $('#input-outro-valor').hide();
    $('#quota-minima-2').hide();
    document.getElementById("texto-outro-valor").style.display = 'none';
    $('#contribuicao-ass').change(function() {
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
                .then(function(result) {

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
                .catch(function(error) {
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

        $('#cep-ass').addClass('is-valid')
        $('#cep-ass').removeClass('is-invalid')

        $('#rua-ass').addClass('is-valid')
        $('#rua-ass').removeClass('is-invalid')

        $('#bairro-ass').addClass('is-valid')
        $('#bairro-ass').removeClass('is-invalid')

        $('#cidade-ass').addClass('is-valid')
        $('#cidade-ass').removeClass('is-invalid')

        $('#estado-ass').addClass('is-valid')
        $('#estado-ass').removeClass('is-invalid')
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        $('#cep-ass').addClass('is-invalid')
        $('#cep-ass').removeClass('is-valid')

        $('#rua-ass').addClass('is-invalid')
        $('#rua-ass').removeClass('is-valid')

        $('#bairro-ass').addClass('is-invalid')
        $('#bairro-ass').removeClass('is-valid')

        $('#cidade-ass').addClass('is-invalid')
        $('#cidade-ass').removeClass('is-valid')

        $('#estado-ass').addClass('is-invalid')
        $('#estado-ass').removeClass('is-valid')
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
            $('#cep-ass').addClass('is-invalid')
            $('#cep-ass').removeClass('is-valid')

            $('#rua-ass').addClass('is-invalid')
            $('#rua-ass').removeClass('is-valid')

            $('#bairro-ass').addClass('is-invalid')
            $('#bairro-ass').removeClass('is-valid')

            $('#cidade-ass').addClass('is-invalid')
            $('#cidade-ass').removeClass('is-valid')

            $('#estado-ass').addClass('is-invalid')
            $('#estado-ass').removeClass('is-valid')
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

function testeCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    resultado = true

    if (cpf == '') resultado = false;

    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        resultado = false;

    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        resultado = false;

    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        resultado = false;

    if (resultado == true) {
        $('#cpf-ass').addClass('is-valid')
        $('#cpf-ass').removeClass('is-invalid')
    } else {
        $('#cpf-ass').addClass('is-invalid')
        $('#cpf-ass').removeClass('is-valid')
    }
}

function validarPrimeiroNome() {

    var primeiroNome = $('#primeiro-nome-ass').val()

    const regex = /[0-9]/

    if ((!regex.test(primeiroNome)) && primeiroNome.length > 0) {
        $('#primeiro-nome-ass').addClass('is-valid')
        $('#primeiro-nome-ass').removeClass('is-invalid')
    } else {
        $('#primeiro-nome-ass').addClass('is-invalid')
        $('#primeiro-nome-ass').removeClass('is-valid')
    }

}

function validarSegundoNome() {

    var segundoNome = $('#ultimo-nome-ass').val()

    const regex = /[0-9]/

    if ((!regex.test(segundoNome)) && segundoNome.length > 0) {
        $('#ultimo-nome-ass').addClass('is-valid')
        $('#ultimo-nome-ass').removeClass('is-invalid')
    } else {
        $('#ultimo-nome-ass').addClass('is-invalid')
        $('#ultimo-nome-ass').removeClass('is-valid')
    }

}

function validarEmail() {

    var email = $('#email-ass').val()

    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@") + 1, email.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        $('#email-ass').addClass('is-valid')
        $('#email-ass').removeClass('is-invalid')
    } else {
        $('#email-ass').addClass('is-invalid')
        $('#email-ass').removeClass('is-valid')
    }
}

function validarTelefone(phone) {
    var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');

    if (regex.test(phone)) {
        $('#telefone-ass').addClass('is-valid')
        $('#telefone-ass').removeClass('is-invalid')
    } else {
        $('#telefone-ass').addClass('is-invalid')
        $('#telefone-ass').removeClass('is-valid')
    }
}

function validarRG() {

    var rg = $('#rg-ass').val()

    if (rg.length == 9) {
        $('#rg-ass').addClass('is-valid')
        $('#rg-ass').removeClass('is-invalid')
    } else {
        $('#rg-ass').addClass('is-invalid')
        $('#rg-ass').removeClass('is-valid')
    }

}

function dataNasc() {

}

function validarDataNasc() {
    var data = $("#dataNasc-ass").val(); // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array

    // para o IE onde será inserido no formato dd/MM/yyyy
    if (data_array[0].length != 4) {
        data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
    }

    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

    if (idade < 18) {
        $('#dataNasc-ass').addClass('is-invalid')
        $('#dataNasc-ass').removeClass('is-valid')
        console.log("menor que 18")
    }

    if (idade >= 18 && idade <= 120) {
        console.log("ok")
        $('#dataNasc-ass').addClass('is-valid')
        $('#dataNasc-ass').removeClass('is-invalid')
    }

    if (idade > 120) {
        console.log("maior que 120")
        $('#dataNasc-ass').addClass('is-invalid')
        $('#dataNasc-ass').removeClass('is-valid')
    }

}

function validarProfissao() {

    var profissao = $('#profissao-ass').val()

    const regex = /[0-9]/

    if ((!regex.test(profissao)) && profissao.length > 0) {
        $('#profissao-ass').addClass('is-valid')
        $('#profissao-ass').removeClass('is-invalid')
    } else {
        $('#profissao-ass').addClass('is-invalid')
        $('#profissao-ass').removeClass('is-valid')
    }

}

function validarCartao() {

    var cartoes = {
        visa: /^4[0-9]{12}(?:[0-9]{3})/,
        mast: /^5[1-5][0-9]{14}/,
        amex: /^3[47][0-9]{13}/
    };

    document.getElementById('num').addEventListener('keyup', testarCC);
    var inputs = document.querySelectorAll('.fsResDir input[type="radio"]');

}



function testarCC(e) {
    var nr = this.value;
    var tipo;
    for (var cartao in cartoes)
        if (nr.match(cartoes[cartao])) tipo = cartao;
    if (tipo) document.getElementById(tipo).click();
    else
        for (var i = 0; i < inputs.length; i++) inputs[i].checked = false;
}