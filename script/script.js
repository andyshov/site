$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(".gallery__photo").on("click", function(e){

    e.preventDefault();
    
    $(this).css({"height":"150%", "width":"150%"});
    
    })