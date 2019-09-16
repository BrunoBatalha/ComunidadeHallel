var database = firebase.database();

function criar() {

    var pedido = {
        nome: $('#nome').val(),
        email: $('#email').val(),
        pedido: $('#pedido').val()
    }

    function writeUserData(nome, email, pedido, id) {
        firebase.database().ref('users/' + id).set({
            nome: nome,
            email: email,
            pedido: pedido
        });
    }

    console.log("cadastrou");
}
