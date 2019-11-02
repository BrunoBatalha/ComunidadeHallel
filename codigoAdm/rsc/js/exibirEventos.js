function exibirEventos() {
    refEventos.on('value', function (snapshot) {
        $('#cards-eventos').html('');
        snapshot.forEach(function (item) {
            console.log("item.val().titulo: " + item.val().titulo);
            let divCol = $('<div class="col-sm-6 col-md-4 col-xl-3 mb-3  justify-content-center"></div>');
            let divCard = $('<div class="card w-80 filterDiv ' + item.val().titulo + '"></div>');
            let divBody = $('<div class="card-body"></div>');
            let h5Titulo = $('<h5 class="card-title"></h5>');
            let pText = $('<p class="card-text"></p>');
            let divFooter = $('<div class="card-footer"></div>');
            let small = $('<small class="text-muted"></small>');
            /*Dropdown*/
            let div1 = $('<div class="dropdown"></div>');
            let dropdown = criarDropdown(item.val().titulo, item.val().destaque, divCard);
            let img = criarImagem(item.val().URLdownloadImg);
            div1.append(dropdown);
            let divrow = $('<div class="row px-0"></div>');
            let divcol1 = $('<div class="col-sm-10 text-left"></div>');
            let divcol2 = $('<div class="col-sm-2 text-right"></div>');
            h5Titulo.append(item.val().titulo);
            pText.append(item.val().chamada);
            let data = converteTimerStamp(item.val().atualizado);
            divFooter.append("Atualizado em " + data);
            divcol1.append(h5Titulo);
            let tituloCodificado = item.val().titulo.replace(' ', '&');
            let linkver = $('<a href="exibirEvento.html?e=' + tituloCodificado + '"><i class="fas fa-edit  text-dark"></i></a>');
            divcol2.append(linkver);
            divrow.append(divcol1);
            divrow.append(divcol2);
            divBody.append(divrow);
            divBody.append(pText);
            divBody.append(div1);
            divFooter.append(small);
            divCard.append(img);
            divCard.append(divBody);
            divCard.append(divFooter);
            divCol.append(divCard);
            $('.btn-add-destaque-evt').on("click", function () {
                let titulo = $(this).data("name");
                console.log($(this)[0]);
                let ref = refEventos.child(titulo);
                setDestaque(true, ref);
            });
            $('.btn-rem-destaque-evt').on("click", function () {
                let titulo = $(this).data("name");
                let ref = refEventos.child(titulo);
                setDestaque(false, ref);
            });
            $('#cards-eventos').append(divCol);
        });
    });
}
