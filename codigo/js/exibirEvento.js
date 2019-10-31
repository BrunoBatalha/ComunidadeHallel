$(document).ready(function () {
    exibirEvento()
});
var refEvento = rootRef.child("eventos")
function exibirEvento(){
    
   // var desc = localStorage.getItem("descricao");
    
    refEvento.child(localStorage.getItem("titulo")).once('value', item => {
                    $('#descricao-evento').html(item.val().descricao);
        console.log(item.val().descricao)
                })
    $('#imagem-evento').attr('src', localStorage.getItem("imagem"));
    $('#nome-evento-principal').text(localStorage.getItem("titulo"));
    $('#nome-evento').text(localStorage.getItem("titulo"));
   
    //$('#descricao-evento').html(desc);
    $('#data-evento').html(localStorage.getItem("data"));
    $('#local-evento').html(localStorage.getItem("local"));
    $('#organizadores-evento').html(localStorage.getItem("organizadores"));
    $('#contato-evento').html(localStorage.getItem("contato"));
}