//Form para cadastro de associados



$(document).ready(function () {

    $('.form-wizard-wrapper').find('.form-wizard-link').click(function () {
        $('.form-wizard-link').removeClass('active');
        var innerWidth = $(this).innerWidth();
        $(this).addClass('active');
        var position = $(this).position();
        $('.form-wizardmove-button').css({ "left": position.left, "width": innerWidth });
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
                        $(document).find('.form-wizardmove-button').css({ "left": position.left, "width": innerWidth });
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
                        $(document).find('.form-wizardmove-button').css({ "left": position.left, "width": innerWidth });
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
    $('#contribuicao-ass').change(function () {
        if ($('#contribuicao-ass').val() == 'Outro valor') {
            $('#input-outro-valor').show();
        } else {
            $('#input-outro-valor').hide();
        }
    });
});


//Cadastro de associados

var refAss = rootRef.child("associados")

var database = firebase.database();

function criar() {

    var e = document.getElementById("contribuicao-ass");
    var valorcontribuicao = e.options[e.selectedIndex].text;

    if(valorcontribuicao == 'Outro valor'){
        valorcontribuicao = $('#input-outro-valor').val()
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
        endereco: $('#endereco-ass').val(),
        senha: $('#senha-ass').val(),
        numerocartao: $('#nmrCartao-ass').val(),
        validade: $('#validade-ass').val(),
        CVV: $('#CVV-ass').val()
    }

    rootRef.child("associados").child(associado.primeiroNome).set({
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
        endereco: associado.endereco,
        senha: associado.senha,
        numero: associado.numerocartao,
        validade: associado.validade,
        CVV: associado.CVV,
        contribuicao: `R$${valorcontribuicao}`
    });

    console.log("cadastrou associado");
}
