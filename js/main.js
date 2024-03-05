$(document).ready(function(){
  $("#slider").owlCarousel({
    items:1,
    dots: true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 2500
  });
   $(".open_button").click(function(){
     $("#navigation_menu").animate({left:"0"},1000);
     $(this).hide();
     $(".close_button").css('display','block');
   });

   $(".close_button").click(function(){
     $("#navigation_menu").animate({left:"-85%"},1000);
     $(this).hide();
     $(".close_button").css('display','none');
     $(".open_button").css('display','block');
   });
   new WOW().init();
});
