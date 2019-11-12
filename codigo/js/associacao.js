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
});


//Cadastro de associados

var refAss = rootRef.child("associados")

var database = firebase.database();

function criar() {

    var associado = {
        primeiroNome: $('#primeiro-nome-ass').val(),
        segundoNome: $('#primeiro-nome-ass').val(),
        email: $('#email-ass').val(),
        telefone: $('#telefone-ass').val(),
        senha: $('#senha-ass').val(),
    }

    rootRef.child("associados").child(associado.primeiroNome).set({
        primeiroNome: associado.primeiroNome,
        segundoNome: associado.segundoNome,
        email: associado.email,
        telefone: associado.telefone,
        senha: associado.senha
    });

    console.log("cadastrou associado");
}
