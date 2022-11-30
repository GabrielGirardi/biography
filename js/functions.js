$(document).ready(function () {
    let btnMenu = $('.menu-lateral');
    let menu = $('.container-menu');

    btnMenu.on('click', function () {
        menu.toggle();
    });

    let btnStart = $('#start-btn');
    let contentProfile = $('.git-block');

    btnStart.on('click', function () {
        contentProfile.addClass('active');
    });

    $('.presentation').addClass('active');
});






