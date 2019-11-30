var refEvento = rootRef.child("noticias")
var tituloNoticia = ""

$(function() {
    let titulo = getTituloEvento(window.location.href);
    exibir(titulo);
    $('#editarNoticia').click(function() {
        window.location = "editNoticia.html?e=" + titulo
    })
})

function getTituloEvento(url) {
    let arrayUrl = url.split('=');
    let titulo = arrayUrl[1].replace('&', ' ');
    return decodeURI(titulo);
}

function exibir(titulo) {
    refNoticias.orderByChild('titulo').equalTo(titulo)
        .once('child_added', snap => {

            tituloNoticia = snap.val().titulo

            $('#titulo').html(snap.val().titulo);
            let data = converteTimerStamp(snap.val().atualizado);
            $('#data').html('<b>Última atualização:</b> ' + data);
            $('#descricao').html(snap.val().descricao);
            $('#autor').html('<b>Autor:</b> ' + snap.val().autor);
            if (snap.val().URLdownloadImg != null) {
                $('#imagem').attr('src', snap.val().URLdownloadImg)
            } else {
                $('#imagem').attr('src', '../rsc/img/retangulo-cinza.png')
            }
        })
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
