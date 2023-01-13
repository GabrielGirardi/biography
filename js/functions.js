$(document).ready(function () {
    let dialogBox = document.querySelector('#dialog');

    $('#dialog').hide();

    setTimeout(function () {
        $('#typing').hide();
        $('#dialog').show();
    }, 4000);

    function change() {
        $('#typing').show();
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
            }, 3000);
        }

        $('.op-1').on('click', function () {
            $(this).attr('disabled', true);
            dialogBox.innerHTML = '<p>Claro, você pode me conhecer melhor acessando <a href="./about.html">Aqui</a></p>';
            change();
        });

        $('.op-2').on('click', function () {
            $(this).attr('disabled', true);
            dialogBox.innerHTML = '<p><a href="https://www.w3.org/html/" target="_blank"><img alt="HTML" src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?logo=html5&logoColor=white"/></a><a href="https://www.w3schools.com/css/" target="_blank"><img alt="CSS" src="https://img.shields.io/badge/Css%20-%231572B6.svg?logo=css3&logoColor=white"/></a><a href="https://www.w3schools.com/js/" target="_blank"><img alt="js" src="https://img.shields.io/badge/-Javascript-yellow?style=plastic&logo=javascript"/></a><a href="https://sass-lang.com" target="_blank"><img alt="sass" src="https://img.shields.io/badge/Scss-%23563D7C.svg?style=flat&logo=sass&logoColor=white"/></a><a href="https://www.php.net/" target="_blank"><img alt="php" src="https://img.shields.io/badge/-php-purple?style=plastic&logo=php"/></a><a href="https://www.java.com" target="_blank"><img alt="java" src="https://img.shields.io/badge/-java-yellow?style=plastic&logo=java"/></a><a href="https://nodejs.org" target="_blank"><img alt="node" src="https://img.shields.io/badge/-node.js-lightgreen?style=plastic&logo=node.js"/></a></p>';
            change();
        });

        $('.op-3').on('click', function () {
            $(this).attr('disabled', true);
            dialogBox.innerHTML = '<p>teste</p>';
            change();
        });

        $('.op-4').on('click', function () {
            $(this).attr('disabled', true);
            dialogBox.innerHTML = '<p>teste</p>';
            change();
        });

        $('.op-5').on('click', function () {
            $(this).attr('disabled', true);
            dialogBox.innerHTML = '<p>teste</p>';
            change();
        });

        dialogBox.hide();

        setTimeout(function () {
            $('#typing').hide();
            dialogBox.show();
        }, 3000);
    }

    $('.op-1').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Claro, você pode me conhecer melhor acessando <a href="./about.html">Aqui</a></p>';
        change();
    });

    $('.op-2').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p><a href="https://www.w3.org/html/" target="_blank"><img alt="HTML" src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?logo=html5&logoColor=white"/></a><a href="https://www.w3schools.com/css/" target="_blank"><img alt="CSS" src="https://img.shields.io/badge/Css%20-%231572B6.svg?logo=css3&logoColor=white"/></a><a href="https://www.w3schools.com/js/" target="_blank"><img alt="js" src="https://img.shields.io/badge/-Javascript-yellow?style=plastic&logo=javascript"/></a><a href="https://sass-lang.com" target="_blank"><img alt="sass" src="https://img.shields.io/badge/Scss-%23563D7C.svg?style=flat&logo=sass&logoColor=white"/></a><a href="https://www.php.net/" target="_blank"><img alt="php" src="https://img.shields.io/badge/-php-purple?style=plastic&logo=php"/></a><a href="https://www.java.com" target="_blank"><img alt="java" src="https://img.shields.io/badge/-java-yellow?style=plastic&logo=java"/></a><a href="https://nodejs.org" target="_blank"><img alt="node" src="https://img.shields.io/badge/-node.js-lightgreen?style=plastic&logo=node.js"/></a></p>';
        change();
    });

    $('.op-3').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>teste</p>';
        change();
    });

    $('.op-4').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>teste</p>';
        change();
    });

    $('.op-5').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>teste</p>';
        change();
    });
});