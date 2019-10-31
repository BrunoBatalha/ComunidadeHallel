var refEvento = rootRef.child("eventos")
var stgEvento = storageRef.child('eventos')

var database = firebase.database();

$(document).ready(function () {
$(document).ready(function() {
    destaqueEventos()

    $(document).on('click', '.titulo-imagens', function(e) {
        e.preventDefault;
        clicouevento($(this).text());
    });

});

function criar() {

    var pedido = {
        nome: $('#nome').val(),
        email: $('#email').val(),
        pedido: $('#pedido').val()
    }

    rootRef.child("pedidos").child(pedido.nome).set({
        nome: pedido.nome,
        email: pedido.email,
        pedido: pedido.pedido,
        visu: "não"
    });

    console.log("cadastrou");
}

function destaqueEventos() {

    console.log("entrou destaques");

    refEvento.on('value', function(snapshot) {
        $('#destaque-eventos').html('')
        $('#proximos-eventos').html('')
        snapshot.forEach(function(item) {

            if (item.val().destaque == true) {

                var divcol = $('<div></div>');
                var divzoom = $('<div></div>');
                var divimg = $('<div></div>')

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
                        img.src = "rsc/img/retangulo-cinza.png"
                        divimg.append(img)
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

                $('#destaque-eventos').append(divcol);


            }


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

                    $('#proximos-eventos').append(divtudo);


                }

            }



        });


    });

}

function clicouevento(titulo) {
    console.log("cganou")
    stgEvento.child(titulo + "/foto")
        .getDownloadURL()
        .then(function(url) {
            localStorage.setItem("imagem", url);
            console.log(url);
            refEvento.orderByChild('titulo').equalTo(titulo)
                .once('child_added', item => {
                    localStorage.setItem("titulo", item.val().titulo);
                    localStorage.setItem("descricao", item.val().descricao);
                    localStorage.setItem("local", item.val().local);
                    localStorage.setItem("data", item.val().data);
                    localStorage.setItem("local", item.val().local);
                    localStorage.setItem("organizadores", item.val().organizadores);
                    localStorage.setItem("contato", item.val().contato)
                })
            window.location.href = "exibirEvento.html";
        }).catch(function(error) {
            localStorage.setItem("imagem", "rsc/img/retangulo-cinza.png");
            console.log(url);
            refEvento.orderByChild('titulo').equalTo(titulo)
                .once('child_added', item => {
                    localStorage.setItem("titulo", item.val().titulo);
                    localStorage.setItem("descricao", item.val().descricao);
                    localStorage.setItem("local", item.val().local);
                    localStorage.setItem("data", item.val().data);
                    localStorage.setItem("local", item.val().local);
                    localStorage.setItem("organizadores", item.val().organizadores);
                    localStorage.setItem("contato", item.val().contato)
                })
            window.location.href = "exibirEvento.html";
            console.log(error.message)
        })

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