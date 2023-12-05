$(function() {
    const button = $('.projects');
    const card = $('.projects-card');

    card.on('click', function(){
        button.trigger('click');
    });
});