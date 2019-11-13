let arquivo

$('#inputArquivo').change(function (e) {
    arquivo = e.target.files[0];
    console.log(arquivo)
})


function publicar() {
    let evento = {
        titulo: $('#titulo').val(),
        data: $('#data').val(),
        local: $('#local').val(),
        descricao: $('#descricao').val(),
        organizadores: $('#organizadores').val(),
        contato: $('#contato').val(),
        chamada: $('#chamada').val(),
        atualizado: firebase.database.ServerValue.TIMESTAMP,
        URLdownloadImg: null
    }

    verificarExistenciaEvento(evento)

}

function verificarExistenciaEvento(evento) {
    let existe = false;
    const refEventos = rootRef.child("eventos")
    refEventos.orderByChild('titulo').equalTo(evento.titulo).once('value', snap => {
        if (snap.exists()) {
            alert("Título de evento existente!")
        } else {
            enviar(evento)
        }
    })
}

function enviar(evento) {
    const refEventos = rootRef.child("eventos").child(evento.titulo)
    const stgEventos = storageRef.child('eventos').child(evento.titulo).child('foto')

    if (arquivo == null) {
        refEventos.set(evento)
        alert('Evento publicado com sucesso')
        window.location.reload();
    } else {
        stgEventos.put(arquivo).then(function (snapshot) {
            stgEventos.getDownloadURL().then(function (url) {
                evento.URLdownloadImg = url
                refEventos.set(evento)
                alert('Evento publicado com sucesso')
                window.location.reload();
            })
        }).catch(function (error) {
            alert('Ocorreu um erro: ' + error.message)
        })
    }

}
