function enviar_imagem(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#fotoPerfil').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
$("#arquivo").change(function () {
    enviar_imagem(this);
});