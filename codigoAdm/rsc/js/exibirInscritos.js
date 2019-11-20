$(document).ready(function() {
    exibirInscritos()

    $('#modalInstru').modal('show')
});

function exibirInscritos() {
    console.log("oi")

    refEventos.child(localStorage.getItem("titulo")).child("inscritos").on('value', function(snapshot) {
        $('#exibirInscritos').html('')
        snapshot.forEach(function(item) {
            let inscricao = item.val()
            let tr = $('<tr></tr>')
            let td1 = $('<td class="align-middle">' + inscricao.cpf + '</td>')
            let td2 = $('<td class="align-middle">' + inscricao.nome + '</td>')
            let td3 = $('<td class="align-middle">' + inscricao.email + '</td>')
            let td4 = $('<td class="align-middle">' + inscricao.telefone + '</td>')

            let td5 = $('<td class="align-middle"></td>')

            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            $('#exibirInscritos').append(tr);
        });
    });
}