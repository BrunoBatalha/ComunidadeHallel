$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        document.getElementById('navbar').className = 'barraNav navbar-expand-md fixed-top';
        console.log($(this).scrollTop())
    } else {
        document.getElementById('navbar').className = 'barraNav navbar-expand-md';
        console.log("saiu")
    }
});