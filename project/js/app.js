$(document).foundation();

$(document).ready(function() {
  $(".songs li").on("click", function(){
    $(".songs li").removeClass('active');
    $(this).toggleClass('active');
  });
  });



$('.music-by-type li').on('click', function(){
  $(".music-by-type li").removeClass('active');
  $(this).addClass('active');
});
