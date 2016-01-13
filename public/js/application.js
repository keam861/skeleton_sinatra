$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  $('.button1').click(function(e) {
    console.log("chale valedor -fichita")
      var conteo = 5;
      var interval = setInterval(function(e){
        conteo --;
        $('#countdown').text(conteo);
        if (conteo == 0){
         clearInterval(interval); // stop the inte  
        };
      },1000);
      // setTimeout(function(e){alert("hello") 
         

      // }, delay); 
        
         // $('td').removeClass('active');
         // $(this).addClass('active');

        // var $parent = $(this).parent();
        // if (!$parent.hasClass('active')) {
        //     $parent.addClass('active');
        // }
        // e.preventDefault();
    });

});

// $(document).getElementById("clickMe").onclick = doFunction;

// var el = document.getElementById("clickMe");
// if (el.addEventListener)
//   el.addEventListener("click", doFunction, false);
// else if (el.attachEvent)
//   el.attachEvent('onclick', doFunction);


// $(document).ready(function () {
//     $('.table td').click(function(e) {

//         $('.table td').removeClass('active');

//         var $parent = $(this).parent();
//         if (!$parent.hasClass('active')) {
//             $parent.addClass('active');
//         }
//         e.preventDefault();
//     });
// });