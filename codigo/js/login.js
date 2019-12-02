$(document).ready(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $('#esquerdaNav').html('')

            console.log(user.email)

            let email = $('<p style="color: white">' + user.email + '</p>');

            let sair = $('<a href="javascript:;" class="btn btn-primary" id="sair">Sair</a>')

            $('#esquerdaNav').append(email);
            $('#esquerdaNav').append(sair);
        } else {
            adicionarBtnLogin()

            console.log("não tem ninguém")
        }
    });
});

$(document).on('click', '#sair', function () {
    sair()
})

function sair() {
    firebase.auth().signOut().then(function () {
        window.location.reload()
    }).catch(function (error) {
        console.debug(error)
    });
}

function login() {

    var usu = {
        email: $('#email-usuario').val(),
        senha: $('#senha-usuario').val()
    }

    firebase.auth().signInWithEmailAndPassword(usu.email, usu.senha)
        .then(function (result) {
            console.log(result)
            console.log("sign in feito")
            window.location.reload()

        })
        .catch(function (error) {
            alert("Não foi possível concluir o login: " + error.message)
        });

}

function adicionarBtnLogin() {

    $('#esquerdaNav').html('')

    let botao = $('<a href="#"><button class="btn btn-secondary my-2 my-sm-0" type="button" style="margin-right: 6px" data-toggle="modal" data-target="#exampleModal">Login</button></a>');

    $('#esquerdaNav').append(botao);

}