$(document).ready(function () {
    let dialogBox = document.querySelector('#dialog');

    $('#dialog').hide();

    setTimeout(function () {
        $('#typing').hide();
        $('#dialog').show();
    }, 3000);

    function change() {
        $('#typing').show();
        $('#dialog').hide();

        setTimeout(function () {
            $('#typing').hide();
            $('#dialog').show();
        }, 2000);
    }

    $('.op-1').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Incrível! você pode clicar <a class="links" href="./about.html">Aqui</a> e conhecer melhor toda a minha trajetória nessa vida de desenvolvimento.</p>';
        change();
    });

    $('.op-2').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p class="tech-languages"><a class="language" href="https://www.w3.org/html/" target="_blank"><img alt="HTML" src="./assets/languages/html.png" width="32" height="32"/></a><a class="language" href="https://www.w3schools.com/css/" target="_blank"><img alt="CSS" src="./assets/languages/css.webp" width="32" height="32"/></a><a class="language" href="https://www.w3schools.com/js/" target="_blank"><img class="language" alt="js" src="./assets/languages/javascript.svg" width="32" height="32"/></a><a class="language" href="https://sass-lang.com" target="_blank"><img alt="sass" src="./assets/languages/sass.png" width="32" height="32"/></a><a class="language" href="https://www.php.net/" target="_blank"><img alt="php" src="./assets/languages/php.png" width="32" height="32"/></a><a class="language" href="https://jquery.com" target="_blank"><img alt="Jquery" src="./assets/languages/jquery.png" width="32" height="32"/></a><a class="language" href="https://nodejs.org" target="_blank"><img alt="node" src="./assets/languages/nodejs.png" width="32" height="32"/></a></p>';
        change();
    });

    $('.op-3').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Atualmente estou trabalhando como Frontend em uma plataforma de e-commerce incrível chamada <a class="links" href="https://www.magazord.com.br">Magazord</></p>';
        change();
    });

    $('.op-4').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p class="social-contact"><a class="social facebook" href="https://www.facebook.com/Biel.gitardi.tmj/" target="_blank"><img src="./assets/social/facebook.png" alt="Facebook" width="32" height="32"/></a><a class="social instagram" href="https://www.instagram.com/gabriell_girardii/" target="_blank"><img src="./assets/social/instagram.png" alt="Instagram" width="32" height="32"/></a><a class="social github" href="https://github.com/GabrielGirardi" target="_blank"><img src="./assets/social/github.png" alt="Github" width="32" height="32"/></a><a class="social linkedin" href="www.linkedin.com/in/ggirardii" target="_blank"><img src="./assets/social/linkedin.png" alt="Linkedin" width="32" height="32"/></a></p>';
        change();
    });

    $('.op-5').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Além de amar a tecnologia, sou apaixonado por desenhar, jogar games, assistir filmes e ouvir música!</p>';
        change();
    });
});