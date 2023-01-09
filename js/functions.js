$(document).ready(function () {
    let dialogBox = document.querySelector('#dialog');

    $('.op-1').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Bem, atualmente tenho 19 Anos</p>';
    });

    $('.op-2').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci obcaecati officiis reiciendis voluptas. Consectetur cum error id ipsum officiis quibusdam repellendus saepe sit tempora tenetur vel velit veniam voluptatem, voluptatum.</p>';
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