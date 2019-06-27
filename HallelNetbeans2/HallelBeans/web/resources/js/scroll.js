var intervalo;

function scrollDireitaFormacoes() {
    intervalo = setInterval(function () {
        document.getElementById('sliderFormacoes').scrollLeft += 3
    }, 5);
};

function scrollEsquerdaFormacoes() {
    intervalo = setInterval(function () {
        document.getElementById('sliderFormacoes').scrollLeft -= 3
    }, 5);
};

function scrollDireitaEventos() {
    intervalo = setInterval(function () {
        document.getElementById('sliderEventos').scrollLeft += 3
    }, 5);
};

function scrollEsquerdaEventos() {
    intervalo = setInterval(function () {
        document.getElementById('sliderEventos').scrollLeft -= 3
    }, 5);
};

function clearScroll() {
    clearInterval(intervalo);
};