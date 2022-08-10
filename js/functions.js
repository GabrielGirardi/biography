// Função automática para trocar idioma do título

setInterval( function() {

    const wel = document.querySelector('#welcome-us');
    const bem = document.querySelector('#bem-vindo-pt');

    if (wel.style.display === "block") {
        wel.style.display = "none";
        bem.style.display = "block";
    } else {
        wel.style.display = "block";
        bem.style.display = "none";
    }

}, 5000);

// Função para abrir o menu lateral

window.onload = function() {
    const button = document.querySelector(".menu-lateral");
    const menu = document.querySelector(".container-menu");

    button.addEventListener("click", function() {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
}




