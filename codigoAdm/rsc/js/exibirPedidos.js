let p_impressao_all;
let array_impressao;
$(document).ready(function () {
    p_impressao = sessionStorage.getItem("lista_pedidos_impressao")
    
    array_impressao = p_impressao.split(',')
    $('#modalInstru').modal('show')
    exibirPedidos()
});

function exibirPedidos() {

    refPedidos.on('value', function (snapshot) {
        $('#exibirPedidos').html('')
        snapshot.forEach(function (item) {
            let pedido = item.val()
            if (array_impressao.includes(item.key)) {
                console.log('okj')
                let tr = $('<tr></tr>')
                let td1 = $('<td class="align-middle">' + pedido.nome + '</td>')
                let td2 = $('<td class="align-middle">' + pedido.pedido + '</td>')

                tr.append(td1);
                tr.append(td2);
                $('#exibirPedidos').append(tr);
            }
        });
    });
}

/*
refPedidos.on('value', function (snapshot) {
        $('#usersList').html('')
        snapshot.forEach(function (item) {
            let pedido_key = item.key
            let pedido = item.val()
            let tr = $('<tr></tr>')
            let td1 = $('<td class="align-middle">' + pedido.nome + '</td>')
            let td2 = $('<td class="align-middle">' + pedido.email + '</td>')
            let td3 = $('<td class="align-middle">' + pedido.pedido + '</td>')
            let td4 = $('<td class="text-center"></td>')
            let td5 = $('<td class="text-center align-middle"><div class="custom-control custom-checkbox" ><input type="checkbox" class="custom-control-input" id="' + pedido_key + '"><label class="custom-control-label" for="' + pedido_key + '">Imprimir</label></div></td>')
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
*/
