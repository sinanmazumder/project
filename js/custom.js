


$('document').ready(function(){
    $('.signin').click(function(){
        $('.login').slideDown();
    });
    $('.cross').click(function(){
        $('.login').slideUp();
    });
    
    
     $('.search_icon').click(function(){
        $('.search').fadeIn();
    });
    $('.cross').click(function(){
        $('.search').fadeOut();
    });
});