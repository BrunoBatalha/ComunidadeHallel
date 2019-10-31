var refEvento = rootRef.child("eventos")
$(function () {
    let titulo = getTituloEvento(window.location.href);
    exibir(titulo);
})

function getTituloEvento(url) {
    let arrayUrl = url.split('=');
    let titulo = arrayUrl[1].replace('&', ' ');
    return decodeURI(titulo);
}

function exibir(titulo) {
    refEvento.orderByChild('titulo').equalTo(titulo)
        .once('child_added', snap => {
            $('#titulo').html(snap.val().titulo);
            $('#data').html('<b>Data:</b> ' + snap.val().data);
            $('#descricao').html(snap.val().descricao);
            $('#organizadores').html('<b>Organizadores:</b> ' + snap.val().organizadores);
            $('#local').html('<b>Local:</b> ' + snap.val().local);
            $('#contato').html('<b>Contato:</b> ' + snap.val().contato);
            $('#imagem').attr(snap.val().contato);
            if (snap.val().URLdownloadImg != null) {
                $('#imagem').attr('src', snap.val().URLdownloadImg)
            } else {
                $('#imagem').attr('src', '../rsc/img/retangulo-cinza.png')
            }

        })

}