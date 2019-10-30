let arquivo

$(function () {
    $('#inputArquivo').change(function (e) {
        arquivo = e.target.files[0];
    })
    const nomeAdm = sessionStorage.getItem("NOME_ADM")
    $('#autor').val(nomeAdm)
});

function publicar() {

    let noticia = {
        titulo: $('#titulo').val(),
        descricao: $('#descricao').val(),
        autor: $('#autor').val(),
        chamada: $('#chamada').val(),
        atualizado: firebase.database.ServerValue.TIMESTAMP,
        URLdownloadImg: null
    }

    verificarExistenciaEvento(noticia)

}

function verificarExistenciaEvento(noticia) {
    let existe = false;
    const refNoticias = rootRef.child("noticias")
    refNoticias.orderByChild('titulo').equalTo(noticia.titulo).once('value', snap => {
        if (snap.exists()) {
            alert("Título de noticia existente!")
        } else {
            enviar(noticia)
        }
    })
}

function enviar(noticia) {
    const refNoticias = rootRef.child("noticias").child(noticia.titulo)
    const stgNoticias = storageRef.child('noticias').child(noticia.titulo).child('foto')

    if (arquivo == null) {
        refNoticias.set(evento)
        alert('Notícia publicada com sucesso')
        window.location.reload();
    } else {
        stgNoticias.put(arquivo).then(function (snapshot) {
            console.log("Isso está no pubNoticias e eu fiz snapshot.url")
            console.log(snapshot.url)
            stgNoticias.getDownloadURL().then(function (url) {
                noticia.URLdownloadImg = url
                refNoticias.set(noticia)
                alert('Notícia publicada com sucesso')
                window.location.reload();
            })
        }).catch(function (error) {
            alert('Ocorreu um erro: ' + error.message)
        })
    }

}
