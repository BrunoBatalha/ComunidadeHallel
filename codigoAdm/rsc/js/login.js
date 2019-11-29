function login() {

    var adm = {
        email: $('#email-log').val(),
        senha: $('#senha-log').val()
    }


    firebase.auth().signInWithEmailAndPassword(adm.email, adm.senha)
        .then(function(result) {
            console.log(result)
            console.log("sign in feito")
            const refAdm = rootRef.child('administradores').orderByChild('email').equalTo(adm.email)
            refAdm.once('child_added', snap => {
                const nomeAdm = snap.val().nome
                window.sessionStorage.setItem('NOME_ADM', nomeAdm);
                window.location.href = "principal.html";
            })

        })
        .catch(function(error) {
            alert("Não foi possível concluir o login: " + error.message)
        });


    /*
        var user = firebase.auth().currentUser;

        if (user) {

            user.providerData.forEach(function (profile) {
                sessionStorage.setItem("email", profile.email);
            });
            window.location.href = "menuAdm.html";

            console.log(user)

        } else {
            alert("Não foi possível entrar");
        }
    */

}