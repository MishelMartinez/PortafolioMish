$(document).ready(function(){

$("#two").hide();
$("#proyects").hide();//texto proyects 
   $("#circle-proyects").hide();
//cambio de color en habilidades
  $("#panel").hover(function(){
        $("#flip2").addClass("learning2");
    });
   $("#panel").hover(function(){
        $("#flip3").addClass("learning3");
    });

   $("#panel2").click(function(){
        $("#flip").slideToggle("slow");

    });

   // bandera de conocmientos
   $("#one").click(function(){
        $("#two").slideToggle("slow");

    });
/*
$(".hider").click(function(){
        $(this).parents(".ex").hide("slow");
    });
/*/

//scroll cambio de letra en recta
    $(window).scroll(function() {
    if ($(document).scrollTop() > 700 && $(document).scrollTop() < 1100 ) {
      $(".ra ").addClass("change1"); //ra contiene p cambian de color section 2
      $(".navbar").css("background-color", "#FCE5CC"); // nav cambia de color
    } else {
      $(".ra").removeClass("change1");
    }
  });
    //texto de programming
  $(window).scroll(function() {
    if ($(document).scrollTop() > 700 && $(document).scrollTop() < 1100 ) {
      $("#text-program").addClass("change-program"); //ra contiene p cambian de color section 2
    } else {
      $("#text-program").removeClass("change-program");
    }
  });
//section proyect  $(this)$("#proyects").css("color", "red").slideUp(2000).slideDown(2000);
 $(window).scroll(function(){
    if ($(document).scrollTop()>1600) {
      $("#proyects").css("color", "black").show();
    }else{
      $("#proyects").hide();

    }
   
  });

 //circle-proyects
 $(window).scroll(function(){
    if ($(document).scrollTop()>1400) {
      $("#circle-proyects").slideDown();
    }if($(document).scrollTop()<1400){
       $("#circle-proyects").hide();
    }
   
  });
  //section contact rombos cambian 
  	var height = $('body').height();

    $(window).scroll(function(){
    if ($(document).scrollTop() > (height * 0.83) ) {
    	console.log('....... ' + height * 0.83);
      $(".figure-rombo,#figure-rombo2").addClass("transf-rombo");
    }else{
      $(".figure-rombo,#figure-rombo2").removeClass("transf-rombo");
    }
   
  });

//section proyectos
  




});  



