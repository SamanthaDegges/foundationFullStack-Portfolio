$(document).foundation();

$(document).ready(function() {

  $(".myTabs").on("click", function(){
    $(".myTabs").removeClass("active");
    $(this).addClass("active");
  });

  $(".name, #subtitle").on("click", function(){
    $(".myTabs").removeClass("active");
    $("#portfolio").addClass("active");
  });
});
