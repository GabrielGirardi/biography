$(document).ready(function () {
    let dialogBox = document.querySelector('#dialog');

    $('.op-1').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Claro, você pode me conhecer melhor acessando o meu portfólio, <a href="./about.html">Clique aqui</a></p>';
    });

    $('.op-2').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p><img src="" alt="" width="" height=""/><img src="" alt="" width="" height=""/><img src="" alt="" width="" height=""/><img src="" alt="" width="" height=""/> </p>';
    });

    $('.op-3').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>teste</p>';
    });

    $('.op-4').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>teste</p>';
    });

    $('.op-5').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>teste</p>';
    });
});