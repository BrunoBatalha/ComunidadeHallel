$(document).ready(function () {
    exibirEvento()

    $('#confirmacao').hide();

    console.log("entrou")

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            rootRef.child("associados").on('value', function (snapshot) {
                snapshot.forEach(function (item) {

                    console.log(item.val().email)
                    console.log(user.email)

                    if (user.email == item.val().email) {

                        console.log("oi")
                        $('#nome-insc').val(item.val().primeiroNome + " " + item.val().segundoNome)
                        $('#email-insc').val(item.val().email)
                        $('#telefone-insc').val(item.val().telefone)
                        $('#cpf-insc').val(item.val().cpf)
                    }

                });
            });

        } else {
            console.log("não tem ninguém")
        }
    });


});
var refEvento = rootRef.child("eventos")

function exibirEvento() {

    // var desc = localStorage.getItem("descricao");

    refEvento.child(localStorage.getItem("titulo")).once('value', item => {
        $('#descricao-evento').html(item.val().descricao);
        console.log(item.val().descricao)
    })
    $('#imagem-evento').attr('src', localStorage.getItem("imagem"));
    $('#nome-evento-principal').text(localStorage.getItem("titulo"));
    $('#nome-evento').text(localStorage.getItem("titulo"));

    //$('#descricao-evento').html(desc);
    $('#data-evento').html(localStorage.getItem("data"));
    $('#local-evento').html(localStorage.getItem("local"));
    $('#organizadores-evento').html(localStorage.getItem("organizadores"));
    $('#contato-evento').html(localStorage.getItem("contato"));
}


function inscrever() {

    let inscricao = {
        nome: $('#nome-insc').val(),
        email: $('#email-insc').val(),
        telefone: $('#telefone-insc').val(),
        cpf: $('#cpf-insc').val()
    }

    verificarExistenciaInscricao(inscricao)

}

function verificarExistenciaInscricao(inscricao) {
    let existe = false;
    const refEventos = rootRef.child("eventos").child(`${localStorage.getItem("titulo")}`).child("inscritos")
    refEventos.orderByChild('cpf').equalTo(inscricao.cpf).once('value', snap => {
        if (snap.exists()) {
            alert("Este cpf já foi cadastrado")
        } else {
            enviarInscricao(inscricao)

            $('#nome-insc').val("")
            $('#email-insc').val("")
            $('#telefone-insc').val("")
            $('#cpf-insc').val("")

            $('#confirmacao').show();

        }
    })
}

function enviarInscricao(inscricao) {
    const refEventos = rootRef.child("eventos").child(`${localStorage.getItem("titulo")}`).child("inscritos").child(inscricao.cpf)

    refEventos.set(inscricao)

}