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
    refNoticias.orderByChild('titulo').equalTo(titulo).once('child_added', snap => {
        $('#autor').val(snap.val().autor)
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
    let noticia = {
        titulo: $('#titulo').val(),
        chamada: $('#chamada').val(),
        descricao: $('#descricao').val(),
        autor: $('#autor').val(),
        chamada: $('#chamada').val(),
        atualizado: firebase.database.ServerValue.TIMESTAMP,
    }

    const refNotTi = refNoticias.child(noticia.titulo)
    const stgNoticia = storageRef.child('noticias').child(noticia.titulo).child('foto')
        
    if (arquivo == null) {
        refNotTi.update(noticia)
        alert('Notícia atualizado com sucesso')
        window.location = '../web/principal.html'
    } else {
        stgNoticia.put(arquivo).then(function (snapshot) {
            stgNoticia.getDownloadURL().then(function (url) {
                noticia.URLdownloadImg = url
                refNotTi.update(noticia)
                refNotTi.update({URLdownloadImg: url})
                
                alert('Evento atualizado com sucesso')
                window.location = '../web/principal.html'
            })
        }).catch(function (error) {
            alert('Ocorreu um erro: ' + error.message)
        })
    }

}
