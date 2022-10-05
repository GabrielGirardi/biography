// Função automática para trocar idioma do título

setInterval( function() {

    const wel = document.querySelector('#welcome-us');
    const bem = document.querySelector('#bem-vindo-pt');

    if (wel.style.display === "flex") {
        wel.style.display = "none";
        bem.style.display = "flex";
    } else {
        wel.style.display = "flex";
        bem.style.display = "none";
    }

}, 5000);

// Função para abrir o menu lateral

window.onload = function() {
    const button = document.querySelector(".menu-lateral");
    let menu = document.querySelector(".container-menu");

    button.addEventListener("click", function() {
        if (menu.style.opacity === "0") {
            menu.style.opacity = "1";
        } else {
            menu.style.opacity = "0";
        }
    });

    const more = document.querySelector(".more");
    let languages = document.querySelector(".languages-content");

    more.onclick = function() {
        if (languages.style.opacity === "0") {
            languages.style.opacity = "1";
        } else {
            languages.style.opacity = "0";
        }
    }
}




