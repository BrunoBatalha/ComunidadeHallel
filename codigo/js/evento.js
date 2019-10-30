var refEvento = rootRef.child("eventos")
var stgEvento = storageRef.child('eventos')

$(document).ready(function () {

    mostrarEventos()

});

function mostrarEventos() {

    refEvento.on('value', function (snapshot) {
        $('#destaque-eventos').html('')
        snapshot.forEach(function (item) {

            var divcol = $('<div></div>');
            var divzoom = $('<div></div>');
            var divimg = $('<div></div>');
            var img = document.createElement('img');
            img.setAttribute('class', 'objectImage');
            var divtext = $('<div></div>');
            var marcador = $('<span></span>');
            var titulo = $('<p></p>');
            var chamada = $('<p></p>');

            divcol.addClass('col-md-3 col-borda-menor');
            divzoom.addClass('zoom');
            divimg.addClass('img-responsive cortar2');
            divtext.addClass('text-item');
            marcador.addClass('marcador');
            titulo.addClass('titulo-imagens');
            chamada.addClass('descricao-imagens');

            stgEvento.child(item.val().nome + "/foto")
                .getDownloadURL()
                .then(function(url) {
                    img.src = url
                    divimg.append(img)
                }).catch(function(error) {

                });

            marcador.append("Evento");
            titulo.append(item.val().nome);
            chamada.append(item.val().chamada);

            divtext.append(marcador);
            divtext.append(titulo);
            divtext.append(chamada);

            divzoom.append(divimg);
            divzoom.append(divtext);

            divcol.append(divzoom);

            $('#listaEventos').append(divcol);

            console.log("já")

        });

    });

}