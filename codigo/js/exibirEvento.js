$(document).ready(function () {
    exibirEvento()
});

function exibirEvento(){
    
    var desc = localStorage.getItem("descricao");
    
    $('#imagem-evento').attr('src', localStorage.getItem("imagem"));
    $('#nome-evento').text(localStorage.getItem("titulo"));
    $('#descricao-evento').append(desc);
    $('#data-evento').text(localStorage.getItem("data"));
    $('#local-evento').text(localStorage.getItem("local"));
    $('#organizadores-evento').text(localStorage.getItem("organizadores"));
    $('#contato-evento').text(localStorage.getItem("contato"));
}