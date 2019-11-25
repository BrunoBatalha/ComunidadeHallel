var arquivo;

$('#inputArquivo').change(function (e) {
    arquivo = e.target.files[0];
    console.log(arquivo)
})

$(function () {
    let titulo = getTituloEvento(window.location.href);

    $('#titulo').val(titulo)
    preencheInputs(titulo)
})

function preencheInputs(titulo) {
    const refEventos = rootRef.child("eventos")
    refEventos.orderByChild('titulo').equalTo(titulo).once('child_added', snap => {
        $('#data').val(snap.val().data)
        $('#local').val(snap.val().local)
        $('#organizadores').val(snap.val().organizadores)
        $('#contato').val(snap.val().contato)
        $('#chamada').val(snap.val().chamada)
        $('#fotoPerfil').attr('src', snap.val().URLdownloadImg)
        CKEDITOR.instances['descricao'].setData(snap.val().descricao);
        console.table(snap.val())

    })
}

function getTituloEvento(url) {
    let arrayUrl = url.split('=');
    let titulo = arrayUrl[1].replace('&', ' ');
    return decodeURI(titulo);
}

function converteTimerStamp(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

function atualizar() {
    let evento = {
        titulo: $('#titulo').val(), 
        local: $('#local').val(),
        descricao: $('#descricao').val(),
        organizadores: $('#organizadores').val(),
        contato: $('#contato').val(),
        chamada: $('#chamada').val(),
        atualizado: firebase.database.ServerValue.TIMESTAMP,
    }

    const refEventos = rootRef.child("eventos").child(evento.titulo)
    const stgEventos = storageRef.child('eventos').child(evento.titulo).child('foto')
    
    
    if (arquivo == null) {
        refEventos.update(evento)
        alert('Evento atualizado com sucesso')
        window.location = '../web/menuAdm.html'
        console.log(window.location)
        alert('Evento atualizado com sucesso1')
    } else {
        stgEventos.put(arquivo).then(function (snapshot) {
            stgEventos.getDownloadURL().then(function (url) {
                evento.URLdownloadImg = url
                refEventos.update(evento)
                refEventos.update({URLdownloadImg: url})
                
                alert('Evento atualizado com sucesso')
                window.location = '../web/menuAdm.html'
                console.log(window.location)
                
            })
        }).catch(function (error) {
            alert('Ocorreu um erro: ' + error.message)
        })
    }

}
