$(window).scroll(function () {
    if ($(this).scrollTop() > 85) {
        document.getElementById('navbar').className = 'barraNav navbar-expand-md fixed-top';
        console.log($(this).scrollTop())
    } else {
        document.getElementById('navbar').className = 'barraNav navbar-expand-md';
        console.log("saiu")
    }
});


$(window).scroll(function () {

    if ($(this).scrollTop() > 85) {
        document.getElementById('navbar').className = 'barraNav navbar-expand-md fixed-top';
        console.log($(this).scrollTop())
    } else {
        document.getElementById('navbar').className = 'barraNav navbar-expand-md';
        console.log("saiu")
    }
});

function aumentaEsquerda(e) {
    document.getElementById('marcadorEsquerdo').className = 'marcadorMidiaAbriu mt-5';
}
function diminuiEsquerda(e) {
    document.getElementById('marcadorEsquerdo').className = 'marcadorMidia mt-5';
}

var elemento = document.getElementById("radio");
elemento.addEventListener('mouseover', aumentaEsquerda);

var elemento = document.getElementById("radio");
elemento.addEventListener('mouseout', diminuiEsquerda);

function aumentaDireita(e) {
    document.getElementById('marcadorDireito').className = 'marcadorMidiaAbriu mb-5';
}
function diminuiDireita(e) {
    document.getElementById('marcadorDireito').className = 'marcadorMidia mb-5';
}

var elemento = document.getElementById("tv");
elemento.addEventListener('mouseover', aumentaDireita);

var elemento = document.getElementById("tv");
elemento.addEventListener('mouseout', diminuiDireita);