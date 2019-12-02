function cadastro() {

    var ddInformados = {
        email: $('#email-cad').val(),
        senha: $('#senha-cad').val(),
        nome: $('#nome-cad').val(),
        telefone: $('#telefone-cad').cleanVal(),
        confsenha: $('#confsenha-cad').val()
    }

    let adm = {
        email: ddInformados.email,
        senha: ddInformados.senha,
        nome: ddInformados.nome,
        telefone: ddInformados.telefone
    };

    if (ddInformados.senha == ddInformados.confsenha) {
        if (adm.senha.length >= 6) {
            firebase.auth()
                .createUserWithEmailAndPassword(adm.email, adm.senha)
                .then(function (result) {
                    rootRef.child("administradores").child(adm.nome).set(adm);
                    $('#modal-cadastro').modal('hide')
                    window.sessionStorage.setItem('NOME_ADM', adm.nome);
                    window.location.href = "principal.html";
                })
                .catch(function (error) {
                    alert("Não foi possível concluir o cadastro: " + error.message)
                });
        } else {
            console.log("Sua senha deve conter no mínimo 6 caracteres.")
        }
    } else {
        alert("As senhas não correspondem.");
    }
}
