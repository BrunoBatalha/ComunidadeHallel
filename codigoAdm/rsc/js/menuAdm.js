var key;

$(document).ready(function() {
    const nomeAdm = sessionStorage.getItem("NOME_ADM")
    $('#bemvindo').html("Bem vindo(a), " + nomeAdm + "!")
    mostrarPedidos()
    exibicaoEventos(false)
    exibirNoticias()
    mostrarAssociados()
});

$(document).on('click', '.visualizar', function() {
    key = $(this).data('name');
    refPedidos.child(key).once('value', snap => {
        let pedido = snap.val();
        $('#informacoes #nome-modal').val(pedido.nome)
        $('#informacoes #mensagem-modal').val(pedido.pedido)
        if (pedido.visualizado) {
            $('#btn-visualizou').addClass('disabled')
        } else {
            $('#btn-visualizou').removeClass('disabled')
        }
    })
    $('#informacoes').modal('toggle')
})

$(document).on('click', '#btn-visualizou', function() {
    refPedidos.child(key).update({
        visualizado: true
    })
    $('#informacoes').modal('toggle')
})

$(document).on('input', '#pesquisa-evento', function() {
    let valor = $(this).val()
    pesquisar(valor)
})

function mostrarPedidos() {
    refPedidos.on('value', function(snapshot) {
        $('#usersList').html('')
        snapshot.forEach(function(item) {
            let pedido_key = item.key
            let pedido = item.val()
            let tr = $('<tr></tr>')
            let td1 = $('<td class="align-middle">' + pedido.nome + '</td>')
            let td2 = $('<td class="align-middle">' + pedido.email + '</td>')
            let td3 = $('<td class="align-middle">' + pedido.pedido + '</td>')
            let td4 = $('<td class="text-center"></td>')
            let td5 = $('<td class="text-center align-middle"><div class="custom-control custom-checkbox" ><input type="checkbox" class="custom-control-input" id="'+pedido_key+'"><label class="custom-control-label" for="'+pedido_key+'">Imprimir</label></div></td>')
            let btn = $('<button class="btn visualizar" data-name="' + pedido_key + '"></button>')

            if (pedido.visualizado) {
                btn.addClass('btn-success').html('Visualizado')
                console.debug(pedido.visualizado)
            } else {
                btn.addClass('btn-danger').html('Não visualizado')
                console.debug(pedido.visualizado)
            }

            td4.append(btn);
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            $('#usersList').append(tr);
        });
    });
}

function mostrarAssociados() {
    refAssociados.on('value', function(snapshot) {
        $('#list-associados').html('')
        snapshot.forEach(function(item) {
            let associado_key = item.key
            let associado = item.val()
            let tr = $('<tr></tr>')
            let td1 = $('<td class="align-middle">' + associado.primeiroNome + ' ' + associado.segundoNome + '</td>')
            let td2 = $('<td class="align-middle">' + associado.email + '</td>')
            let td3 = $('<td class="align-middle">' + associado.telefone + '</td>')
            let td4 = $('<td class="align-middle">' + associado.contribuicao + '</td>')

            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            $('#list-associados').append(tr);
        });
    });
}

function exibicaoEventos(strFiltro) {
    refEventos.on('value', function(snapshot) {
        if (!strFiltro) {
            $('#cards-eventos').html('')
        }
        snapshot.forEach(function(item) {

            let divCol = $('<div class="xx col-sm-6 col-md-4 col-xl-4 mb-4  justify-content-center"></div>');
            let divCard = $('<div class="card w-80 filterDiv ' + item.val().titulo + '"></div>');
            let divBody = $('<div class="card-body"></div>');
            let h5Titulo = $('<h5 class="card-title"></h5>');
            let pText = $('<p class="card-text"></p>');
            let divFooter = $('<div class="card-footer"></div>');
            let small = $('<small class="text-muted"></small>');

            /*Dropdown*/
            let div1 = $('<div class="dropdown"></div>')
            let dropdown = criarDropdown(item.val().titulo, item.val().destaque, divCard)
            div1.append(dropdown)

            let divrow = $('<div class="row px-0"></div>')
            let divcol1 = $('<div class="col-sm-10 text-left"></div>')
            let divcol2 = $('<div class="col-sm-2 text-right"></div>')
            h5Titulo.append(item.val().titulo)
            pText.append(item.val().chamada)
            let data = converteTimerStamp(item.val().atualizado);
            divFooter.append("Atualizado em " + data);
            divcol1.append(h5Titulo)
            let tituloCodificado = item.val().titulo.replace(' ', '&')
            let linkver = $('<a href="exibirEvento.html?e=' + tituloCodificado + '" title="Editar"><i class="fas fa-edit  text-dark"></i></a>')
            divcol2.append(linkver)
            divrow.append(divcol1)
            divrow.append(divcol2)
            divBody.append(divrow)
            divBody.append(pText)
            divBody.append(div1)
            divFooter.append(small)

            /*Imagem*/
            let img = criarImagem(item.val().URLdownloadImg)

            divCard.append(img)
            divCard.append(divBody)
            divCard.append(divFooter)
            divCol.append(divCard)
            iniciarBotoes(refEventos)
            if (strFiltro == item.val().titulo) {
                $('#cards-eventos').append(divCol)
            } else if (!strFiltro) {
                $('#cards-eventos').append(divCol)
            }
        });
    });
}

function exibirNoticias() {
    refNoticias.on('value', function(snapshot) {
        $('#cards-noticias').html('')
        snapshot.forEach(function(item) {

            let divCol = $('<div class="col-sm-6 col-md-4 col-xl-4 mb-4 justify-content-center"></div>');
            let divCard = $('<div class="card w-80"></div>');
            let divBody = $('<div class="card-body"></div>');
            let h5Titulo = $('<h5 class="card-title"></h5>');
            h5Titulo.append(item.val().titulo)
            let pText = $('<p class="card-text"></p>');
            pText.append(item.val().chamada)
            let divFooter = $('<div class="card-footer"></div>');
            let small = $('<small class="text-muted"></small>');

            //Dropdown
            let div1 = $('<div class="dropdown"></div>')
            let a = $('<a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opções</a>')
            let dropme = $('<div class="dropdown-menu my-0 py-0" aria-labelledby="dropdownMenuLink"></div>')
            let item2 = $('<button class="dropdown-item btn-add-destaque-not" data-name="' + item.val().titulo + '">Adicionar aos destaques</button>')
            let item3 = $('<button class="dropdown-item btn-rem-destaque-not" data-name="' + item.val().titulo + '">Remover dos destaques</button>')

            $('.btn-add-destaque-not').unbind("click").click(function() {
                let titulo = $(this).data("name");
                let ref = refNoticias.child(titulo)
                setDestaque(true, ref)
            });

            $('.btn-rem-destaque-not').unbind("click").click(function() {
                let titulo = $(this).data("name");
                let ref = refNoticias.child(titulo)
                setDestaque(false, ref)
            });

            dropme.append(item2)
            dropme.append(item3)
            a.append(dropme)

            let divrow = $('<div class="row px-0"></div>')
            let divcol1 = $('<div class="col-sm-10 text-left"></div>')
            divcol1.append(h5Titulo)
            let divcol2 = $('<div class="col-sm-2 text-right"></div>')
            let tituloCodificado = item.val().titulo.replace(' ', '&')
            let linkver = $('<a href="exibirEvento.html?e=' + tituloCodificado + '"  title="Editar"><i class="fas fa-edit  text-dark"></i></a>')
            divcol2.append(linkver)

            divrow.append(divcol1)
            divrow.append(divcol2)

            if (item.val().destaque) {
                divCard.addClass("border border-danger");
                divCard.attr("style", "border-width: 200px");

                item2.addClass('rounded border border-danger')
            } else {
                divCard.addClass("border border-dark");
                item3.addClass('rounded border border-danger')
            }

            let img = document.createElement('img')
            img.setAttribute('class', 'imagem');
            img.setAttribute('class', 'card-img-top');
            img.height = 200;
            if (item.val().URLdownloadImg != null) {
                img.src = item.val().URLdownloadImg
            } else {
                img.src = "../rsc/img/retangulo-cinza.png"
            }

            let data = converteTimerStamp(item.val().atualizado);
            divFooter.append("Atualizado em " + data + "<br>Autor: " + item.val().autor);

            divBody.append(divrow)
            divBody.append(pText)
            divBody.append(a)
            divFooter.append(small)

            divCard.append(img)
            divCard.append(divBody)
            divCard.append(divFooter)

            divCol.append(divCard)

            $('#cards-noticias').append(divCol)
        });

    });
}

function iniciarBotoes(ref) {
    $('.btn-add-destaque-evt').on("click", function() {
        let titulo = $(this).data("name");
        let r = ref.child(titulo)
        setDestaque(true, r)
    });
    $('.btn-rem-destaque-evt').on("click", function() {
        let titulo = $(this).data("name");
        let r = ref.child(titulo)
        setDestaque(false, r)
    });
}

function criarDropdown(titulo, destaque, card) {
    let a = $('<a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opções</a>')
    let dropme = $('<div class="dropdown-menu my-0 py-0" aria-labelledby="dropdownMenuLink"></div>')
    let item2 = $('<button class="dropdown-item btn-add-destaque-evt" data-name="' + titulo + '">Adicionar aos destaques</button>')
    let item3 = $('<button class="dropdown-item btn-rem-destaque-evt" data-name="' + titulo + '">Remover dos destaques</button>')
    if (destaque) {
        card.addClass("border border-danger");
        item2.addClass('rounded border border-danger')
    } else {
        card.addClass("border border-dark");
        item3.addClass('rounded border border-danger')
    }
    dropme.append(item2)
    dropme.append(item3)
    a.append(dropme)
    return a
}

function criarImagem(url) {
    let img = document.createElement('img')
    img.setAttribute('class', 'imagem');
    img.setAttribute('class', 'card-img-top zoom');
    img.height = 200;
    if (url != null) {
        img.src = url
    } else {
        img.src = "../rsc/img/retangulo-cinza.png"
    }
    return img
}

function setDestaque(estado, ref) {
    ref.update({
        "destaque": estado
    })
    pesquisar($('#pesquisa-evento').val())
}

function converteTimerStamp(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp);
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

function pesquisar(strPesq) {
    if (strPesq != "") {
        let aba = 'eventos'
        let ref;
        switch (aba) {
            case 'eventos':
                {
                    ref = refEventos.orderByChild('titulo');
                    break;
                }
        }

        ref.startAt(strPesq)
            .endAt(strPesq + '\uf8ff')
            .once('value', function(snapshot) {
                $('#cards-eventos').html('')
                snapshot.forEach(function(item) {
                    let pedido = item.val()
                    console.debug(pedido)
                    exibicaoEventos(pedido.titulo)
                        //console.debug($('.xx:contains(' + pedido.titulo + ')').remove())
                })
            })
    } else {
        exibicaoEventos(false)
    }
}



/* TODO: utilizar isso em formações*/
/*
    $(document).on('click', '.td-clicavel', function (e) {
        e.preventDefault;
        procurarEvento($(this).text())
    });

function procurarEvento(nome) {
    stgEvento.child(nome + "/foto")
        .getDownloadURL()
        .then(function (url) {
            $('#imagemGrande').attr('src', url)
        }).catch(function (error) {
            console.log(error.message)
        })
    $('#titulo').text('')
    $('#descricao').text('')
    $('#detalhes').html('')
    refEventos.orderByChild('titulo').equalTo(nome)
        .once('child_added', snap => {
            $('#titulo').text(snap.val().nome)
            $('#descricao').html(snap.val().descricao)
            var p1 = $('<p>' + snap.val().data + '</p>');
            var p2 = $('<p>' + snap.val().organizadores + '</p>');
            var p3 = $('<p>' + snap.val().local + '</p>');
            var p4 = $('<p>' + snap.val().contato + '</p>');

            $('#detalhes').append(p1)
            $('#detalhes').append(p2)
            $('#detalhes').append(p3)
            $('#detalhes').append(p4)
        })
}
*/