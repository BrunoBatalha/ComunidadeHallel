function cadastro() {

    console.log("entrou")

    var adm = {
        email: $('#email').val(),
        senha: $('#senha').val(),
        nome: $('#nome').val(),
        confsenha: $('#confsenha').val
    }

    console.log("passou1")

    let dados = {
        email: adm.email,
        senha: adm.senha,
        nome: adm.nome
    };

    console.log("passou2")

    if (dados.senha.length >= 6) {

        rootRef.child("administradores").child(dados.nome).set(dados);

        firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        window.location.href = "index.html";

        console.log("cadastrou");
    }else{
        console.log("deu pau no cadastro")
    }


}