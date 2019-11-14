var refEvento = rootRef.child("eventos")
var stgEvento = storageRef.child('eventos')

var refNoticia = rootRef.child("noticias")
var stgNoticia = storageRef.child('noticias')

var database = firebase.database();

$(document).ready(function () {
    destaqueEventos()
    destaqueNoticias()

    $(document).on('click', '.titulo-imagens', function (e) {
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

    refEvento.on('value', function (snapshot) {
        $('#destaque-eventos').html('')
        $('#proximos-eventos').html('')
        snapshot.forEach(function (item) {

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
                    .then(function (url) {
                        img.src = url
                        divimg.append(img)
                    }).catch(function (error) {
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


function destaqueNoticias() {

    console.log("entrou noticias");

    var quadradomaior = "";
    var quadradomedio = "";
    var quadradomenor1 = "";
    var quadradomenor2 = "";


    refNoticia.on('value', function (snapshot) {
        $('#destaque-noticias').html('')
        snapshot.forEach(function (item) {


            if (item.val().destaque == true) {

                console.log("entrou primeiro if")

                if (quadradomaior == "") {

                    console.log("quadrado maior")

                    let divcolmaior = $('<div class="col-md-6 col-sem-margem col-lateral-direita"></div>');
                    let amaior = $('<a href="#"></a>');
                    let divzoommaior = $('<div class="zoom"></div>')

                    let imgmaior = document.createElement('img')
                    imgmaior.setAttribute('class', 'img-responsive cortar1');
                    if (item.val().URLdownloadImg != null) {
                        imgmaior.src = item.val().URLdownloadImg
                    } else {
                        imgmaior.src = "../rsc/img/retangulo-cinza.png"
                    }

                    let divtextamior = $('<div class="text-item"></div>')
                    let spanmaior = $('<span class="marcador"></span>')
                    let titulomaior = $('<p class="titulo-imagens"></p>')
                    let descricaomaior = $('<p class="descricao-imagens"></p>')

                    spanmaior.append("Notícia");
                    titulomaior.append(item.val().titulo);
                    descricaomaior.append(item.val().chamada);

                    divtextamior.append(spanmaior);
                    divtextamior.append(titulomaior);
                    divtextamior.append(descricaomaior);

                    divzoommaior.append(imgmaior);
                    divzoommaior.append(divtextamior);

                    amaior.append(divzoommaior);

                    divcolmaior.append(amaior);

                    quadradomaior = item.val().titulo

                    console.log(quadradomaior)

                    $('#destaque-noticias').append(divcolmaior);


                }


                let divcolfora = $('<div class="col-md-6 col-sem-margem"></div>')

                if (quadradomedio == "" && quadradomaior != item.val().titulo) {

                    console.log("entroumedio")

                    let divcolmedio = $('<div class="col-md-12 col-sem-margem"></div>');
                    let amedio = $('<a href="#"></a>');
                    let divzoommedio = $('<div class="zoom mx-auto"></div>')

                    let imgmedio = document.createElement('img')
                    imgmedio.setAttribute('class', 'img-responsive cortar2');
                    if (item.val().URLdownloadImg != null) {
                        imgmedio.src = item.val().URLdownloadImg
                    } else {
                        imgmedio.src = "../rsc/img/retangulo-cinza.png"
                    }

                    let divtextmedio = $('<div class="text-item"></div>')
                    let spanmedio = $('<span class="marcador"></span>')
                    let titulomedio = $('<p class="titulo-imagens"></p>')
                    let descricaomedio = $('<p class="descricao-imagens"></p>')

                    spanmedio.append("Notícia");
                    titulomedio.append(item.val().titulo);
                    descricaomedio.append(item.val().chamada);
                    divtextmedio.append(spanmedio);
                    divtextmedio.append(titulomedio);
                    divtextmedio.append(descricaomedio);

                    divzoommedio.append(imgmedio);
                    divzoommedio.append(divtextmedio);

                    amedio.append(divzoommedio);

                    divcolmedio.append(amedio);

                    divcolfora.append(divcolmedio)

                    quadradomedio = item.val().titulo;

                    console.log(quadradomedio)

                    $('#destaque-noticias').append(divcolfora);

                }


                if (quadradomenor1 == "" && quadradomedio != item.val().titulo && quadradomaior != item.val().titulo) {

                    console.log("entroumenor1")

                    let divcolmenor1 = $('<div class="col-md-6 col-margem col-sem-margem-bottom col-lateral-esquerda"></div>');
                    let amenor1 = $('<a href="#"></a>');
                    let divzoommenor1 = $('<div class="zoom mx-auto"></div>')

                    let imgmenor1 = document.createElement('img')
                    imgmenor1.setAttribute('class', 'img-responsive cortar2');
                    if (item.val().URLdownloadImg != null) {
                        imgmenor1.src = item.val().URLdownloadImg
                    } else {
                        imgmenor1.src = "../rsc/img/retangulo-cinza.png"
                    }

                    let divtextmenor1 = $('<div class="text-item"></div>')
                    let spanmenor1 = $('<span class="marcador"></span>')
                    let titulomenor1 = $('<p class="titulo-imagens"></p>')
                    let descricaomenor1 = $('<p class="descricao-imagens"></p>')

                    spanmenor1.append("Notícia");
                    titulomenor1.append(item.val().titulo);
                    descricaomenor1.append(item.val().chamada);
                    divtextmenor1.append(spanmenor1);
                    divtextmenor1.append(titulomenor1);
                    divtextmenor1.append(descricaomenor1);

                    divzoommenor1.append(imgmenor1);
                    divzoommenor1.append(divtextmenor1);

                    amenor1.append(divzoommenor1);

                    divcolmenor1.append(amenor1);

                    let divmenores = $('<div class="col-md-12 col-margem col-sem-margem-bottom"></div>')
                    divmenores.append(divcolmenor1)

                    divcolfora.append(divmenores)

                    quadradomenor1 = item.val().titulo;

                    console.log(quadradomenor1)

                    $('#destaque-noticias').append(divcolfora);

                }

            }

        });


    });

}


function clicouevento(titulo) {
    console.log("cganou")
    stgEvento.child(titulo + "/foto")
        .getDownloadURL()
        .then(function (url) {
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
        }).catch(function (error) {
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