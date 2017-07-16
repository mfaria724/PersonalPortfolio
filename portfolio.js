$(document).ready(function() { 

  $("#brand").click(function() {
      $('html, body').animate({
        scrollTop: $("#title").offset().top - 60
      }, 1000);
      $("#about-button").removeClass("active");
      $("#contact-button").removeClass("active");
      $("#portfolio-button").removeClass("active");  
      $("#navbar").collapse("hide");
  });

  $("#about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 60
    }, 1000);
    $(this).addClass("active");
    $("#portfolio-button").removeClass("active");
    $("#contact-button").removeClass("active");
    $(':focus').blur();
    $("#navbar").collapse("hide");
  });

  $("#portfolio-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 60
    }, 1000);
    $(this).addClass("active");
    $("#about-button").removeClass("active");
    $("#contact-button").removeClass("active");
    $(':focus').blur();
    $("#navbar").collapse("hide");
  });

  $("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 60
    }, 1000);
    $(this).addClass("active");
    $("#portfolio-button").removeClass("active");
    $("#about-button").removeClass("active");
    $(':focus').blur();
    $("#navbar").collapse("hide");
  });

  var title = $("#title").offset().top - 60;
  var about = $("#about").offset().top - 61;
  var portfolio = $("#portfolio").offset().top - 61;
  var contact = $("#contact").offset().top - 61;

  var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > title ) { 
      $("#about-button").removeClass("active");
      $("#portfolio-button").removeClass("active");
      $("#contact-button").removeClass("active");
    }
    if ( $w.scrollTop() >= about ) { 
      $("#about-button").addClass("active");
      $("#portfolio-button").removeClass("active");
      $("#contact-button").removeClass("active");
    } 
    if ($w.scrollTop() >= portfolio) {
      $("#portfolio-button").addClass("active");
      $("#contact-button").removeClass("active");
      $("#about-button").removeClass("active");
    }
    if ($w.scrollTop() >= contact) {
      $("#contact-button").addClass("active");
      $("#portfolio-button").removeClass("active");
      $("#about-button").removeClass("active");
    }
  });
});