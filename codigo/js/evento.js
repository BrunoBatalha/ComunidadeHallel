var refEvento = rootRef.child("eventos")
var stgEvento = storageRef.child('eventos')

$(document).ready(function() {

    mostrarEventos()

});

function mostrarEventos() {

    refEvento.on('value', function(snapshot) {
        $('#destaque-eventos').html('')
        $('#mais-proximos').html('')
        snapshot.forEach(function(item) {

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

            stgEvento.child(item.val().titulo + "/foto")
                .getDownloadURL()
                .then(function(url) {
                    img.src = url
                    divimg.append(img)
                }).catch(function(error) {

                });

            marcador.append("Evento");
            titulo.append(item.val().titulo);
            chamada.append(item.val().chamada);

            divtext.append(marcador);
            divtext.append(titulo);
            divtext.append(chamada);

            divzoom.append(divimg);
            divzoom.append(divtext);

            divcol.append(divzoom);

            $('#listaEventos').append(divcol);

            console.log("já")

            // mais próximos

            let parts = item.val().data.split('-')

            var date = new Date(parts[0], parts[1] - 1, parts[2])

            console.log(date)

            let parts2 = dataAtualFormatada().split('/')

            var date2 = new Date(parts2[2], parts2[1] - 1, parts2[0])

            var umdia = 1000 * 60 * 60 * 24;

            var c = parseInt(date.getTime() - date2.getTime());

            var d = (c / umdia);

            console.log(d)

            if (d >= 0) {

                if (d <= 6) {

                    var divtudo = $('<div></div>')
                    var ptitulo = $('<p></p>');
                    var plocal = $('<p></p>');
                    var pdata = $('<p></p>');

                    ptitulo.addClass('tituloevento');
                    plocal.addClass('local');
                    pdata.addClass('data');

                    ptitulo.append(item.val().titulo);
                    plocal.append("Local: " + item.val().local);
                    pdata.append("Data: " + item.val().data);

                    divtudo.append(ptitulo);
                    divtudo.append(plocal);
                    divtudo.append(pdata);

                    $('#mais-proximos').append(divtudo);


                }

            }

        });



    });

}

function dataAtualFormatada() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}