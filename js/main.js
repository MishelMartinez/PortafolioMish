$(document).ready(function(){
	 //$("#pp").hide();
	 // SECCION INDEX

   $("#text-introduction").hide();
   $("#name-mish").hide();
   $("#text-info-contact").hide();
   $("#text-musas").hide();
   $("#text-keane").hide();
       // $("#pp").animate({padding-left: '140px'});
   $(window).scroll(function(){  //texto introductorio
    if ($(document).scrollTop()>450) {
      $("#text-introduction").slideDown(500);
    }
    else{
    	$("#text-introduction").hide();
    }
   
  });
   //texto mishel martinez
   $(window).scroll(function(){
    if ($(document).scrollTop()>5) {
      $("#name-mish").show(1000);
    }
   
  });
   // imagen habilidades
   $(window).scroll(function(){
    if ($(document).scrollTop()>860) {
      $("#imagen-habi").addClass("rotate");
    }else{
    	 $("#imagen-habi").removeClass("rotate");
    }
   
  });

// SECCION CONTACTO
//texto Contacto
   $(window).scroll(function(){
    if ($(document).scrollTop()>5) {
      $("#text-info-contact").show(1000);
    }
   
  });

   // SECCION PROYECTO
//texto Contacto
   $(window).scroll(function(){
    if ($(document).scrollTop()>5) {
      $("#text-musas").show(500);
    }
   
  });
   $(window).scroll(function(){
    if ($(document).scrollTop()>200) {
      $("#text-keane").show(500);
    }
   
  });
});