function cadastro() {

    console.log("entrou")

    var adm = {
        email: $('#email-cad').val(),
        senha: $('#senha-cad').val(),
        nome: $('#nome-cad').val(),
        telefone: $('#telefone-cad').val(),
        confsenha: $('#confsenha-cad').val()
    }

    let dados = {
        email: adm.email,
        senha: adm.senha,
        nome: adm.nome,
        telefone: adm.email
    };

    if (dados.senha.length >= 6) {

        firebase.auth()
            .createUserWithEmailAndPassword(dados.email, dados.senha)
            .then(function(result) {
                rootRef.child("administradores").child(dados.nome).set(dados);
                $('#modal-cadastro').modal('hide')
                window.location.href = "menuAdm.html";
            })
            .catch(function(error) {
                alert("Não foi possível concluir o cadastro: " + error.message)
            });


    } else {
        console.log("Não foi possível concluir.")
    }

}