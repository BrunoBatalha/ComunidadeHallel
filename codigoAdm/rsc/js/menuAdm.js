var refEvento = rootRef.child("eventos")
var stgEvento = storageRef.child('eventos')

var refNoticias = rootRef.child("noticias")
var stgNoticias = storageRef.child('noticias')

var arrayEventos = []
var arrayChecados = []

$(function () {

    const nomeAdm = sessionStorage.getItem("NOME_ADM")

    $('#bemvindo').html("Bem vindo, " + nomeAdm + "!")

    mostrarPedidos()

    exibirEventos()
    exibirNoticias()
    
    $(document).on('click', '.td-clicavel', function (e) {
        e.preventDefault;
        procurarEvento($(this).text())
    });
    $(document).on('click', '.ck-destaque', function (e) {
        verificarCheckBoxes()
        $(this).parent().parent().addClass('bg-wine')
        if ($(this).is(':checked')) {
            addDestaque($(this).val())
        } else {
            removeDestaque($(this).val())
        }
    });

});

function mostrarPedidos() {
    $("tr").click(function () {
        $(this).find('td').each(function (i) {
            $th = $("thead th")[i];
            if (jQuery($th).text() == "Nome") {
                $("#nome").val($(this).html());
            }
            if (jQuery($th).text() == "Pedido") {
                $("#pedido").val($(this).html());
            }
            $('#informacoes').modal('show')
        });

    })

    var userList = document.getElementById('usersList')

    rootRef.child("pedidos").on('value', function (snapshot) {

        usersList.innerHTML = '';
        snapshot.forEach(function (item) {

            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');

            td1.append(item.val().nome);

            td2.append(item.val().email);

            td3.append(item.val().pedido);

            td4.append(item.val().visu);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            userList.appendChild(tr);

        });

    });


}

function exibirEventos() {
    refEvento.on('value', function (snapshot) {
        $('#cards-eventos').html('')
        let cont = 0
        snapshot.forEach(function (item) {

            let divCol = $('<div class="col-sm-4 mb-3 justify-content-center"></div>');
            let divCard = $('<div class="card w-80"></div>');
            divCard.attr("style", "height:400px")
            let divBody = $('<div class="card-body"></div>');
            let h5Titulo = $('<h5 class="card-title"></h5>');
            let pText = $('<p class="card-text"></p>');
            let divFooter = $('<div class="card-footer"></div>');
            let small = $('<small class="text-muted"></small>');

            let checkbox = $('<input type="checkbox" class="ck-destaque" value="' + item.val().nome + '" name="destaque">')

            let img = document.createElement('img')
            img.setAttribute('class', 'imagem');
            img.setAttribute('class', 'card-img-top');
            img.height = 200;
            if (item.val().URLdownloadImg != null) {
                img.src = item.val().URLdownloadImg
            } else {
                img.src = "../rsc/img/retangulo-cinza.png"
            }

            h5Titulo.append(item.val().titulo)
            pText.append(item.val().chamada)

            let data = converteTimerStamp(item.val().atualizado);
            divFooter.append("Atualizado em " + data);
            divBody.append(h5Titulo)
            divBody.append(pText)
            divFooter.append(small)

            divCard.append(img)
            divCard.append(divBody)
            divCard.append(divFooter)

            divCol.append(divCard)
            /*
            if (item.val().destaque) {
                checkbox.prop('checked', true)
                tr.addClass('bg-wine')
            }
            */

            $('#cards-eventos').append(divCol)
            arrayEventos[cont++] = item.val().nome
            verificarCheckBoxes()
        });

    });
}

function exibirNoticias() {
    refNoticias.on('value', function (snapshot) {
        $('#cards-noticias').html('')
        snapshot.forEach(function (item) {

            let divCol = $('<div class="col-sm-4 mb-3 justify-content-center"></div>');
            let divCard = $('<div class="card w-80"></div>');
            divCard.attr("style", "height:400px")
            let divBody = $('<div class="card-body"></div>');
            let h5Titulo = $('<h5 class="card-title"></h5>');
            let pText = $('<p class="card-text"></p>');
            let divFooter = $('<div class="card-footer"></div>');
            let small = $('<small class="text-muted"></small>');

            let checkbox = $('<input type="checkbox" class="ck-destaque" value="' + item.val().nome + '" name="destaque">')

            let img = document.createElement('img')
            img.setAttribute('class', 'imagem');
            img.setAttribute('class', 'card-img-top');
            img.height = 200;
            if (item.val().URLdownloadImg != null) {
                img.src = item.val().URLdownloadImg
            } else {
                img.src = "../rsc/img/retangulo-cinza.png"
            }

            h5Titulo.append(item.val().titulo)
            pText.append(item.val().chamada)

            let data = converteTimerStamp(item.val().atualizado);
            divFooter.append("Atualizado em " + data + "<br>Autor: "+item.val().autor);
            divBody.append(h5Titulo)
            divBody.append(pText)
            divFooter.append(small)

            divCard.append(img)
            divCard.append(divBody)
            divCard.append(divFooter)

            divCol.append(divCard)
            /*
            if (item.val().destaque) {
                checkbox.prop('checked', true)
                tr.addClass('bg-wine')
            }
            */

            $('#cards-noticias').append(divCol)
        });

    });
}

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
    refEvento.orderByChild('titulo').equalTo(nome)
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

function verificarCheckBoxes() {
    var CheckMaximo = 3;
    var Marcados = 0;
    var objCheck = document.getElementsByName('destaque');
    console.log(objCheck)
    //Percorrendo os checks para ver quantos foram selecionados:
    for (var iLoop = 0; iLoop < objCheck.length; iLoop++) {
        //Se o número máximo de checkboxes ainda não tiver sido atingido, continua a verificação:
        if (Marcados <= CheckMaximo) {
            if (objCheck[iLoop].checked) {
                Marcados++;
            }
            //Habilitando todos os checkboxes, pois o máximo ainda não foi alcançado.
            for (var i = 0; i < objCheck.length; i++) {
                objCheck[i].disabled = false;
            }
            //Caso contrário, desabilitar o checkbox;
            //Nesse caso, é necessário percorrer todas as opções novamente, desabilitando as não checadas;
        } else {
            for (var i = 0; i < objCheck.length; i++) {
                if (objCheck[i].checked == false) {
                    objCheck[i].disabled = true;
                }
            }
        }
    }

}

function addDestaque(eventoCk) {
    refEvento.child(eventoCk)
        .update({
            "destaque": true
        })
}

function removeDestaque(eventoCk) {
    refEvento.child(eventoCk)
        .update({
            "destaque": false
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
