// Eventos //
$("#html").click(marcarH);
$("#css").click(marcarC);
$("#javascript").click(marcarJ);
$("#resultado").click(marcarR);


// Variables //
var marcadoH = false;
var marcadoC = false;
var marcadoJ = false;
var marcadoR = false;

  $("#contedor").height($(window).height()-$("#head").height());
  $("#contedor").width($(window).width());

// Funciones //

            function actualizarSalida()
                {
                     $("#codigoResultado").contents().find("html").html("<html><head><style type='text/css'>"+$("#codigoCss").val()+"</style></head><body>"+$("#codigoHtml").val())+"</body></html>";
                    document.getElementById("codigoResultado").contentWindow.eval($("#codigoJavascript").val());
                    
                }



            function marcarH()
            {
                if( marcadoH == false)
                   {
                       $("#html").css("backgroundColor","#E8F2FF");
                       $(".textoHead").css("fontWeight","100");
                       $("#codigoHtml").css("display", "block"); 
                       $("#imagenFondo").css("display", "none");
                       $("#codigoHtml").height($(window).height()-$("#head").height());
                       marcadoH = true;
                       
               }

                  else{
                        $("#html").css("backgroundColor","#EDEDED");
                        $(".textoHead").css("fontWeight","bold");
                        marcadoH = false;   
                        $("#codigoHtml").css("display", "none");
                        
                  }
            }

            function marcarC()
            {
                if( marcadoC == false)
                   {
                       $("#css").css("backgroundColor","#E8F2FF");
                       marcadoC = true;
                       $("#codigoCss").css("display", "block");
                       $("#codigoCss").height($(window).height()-$("#head").height());
                       $("#imagenFondo").css("display", "none");
                   }

                  else{
                        $("#css").css("backgroundColor","#EDEDED");
                        marcadoC = false; 
                        $("#codigoCss").css("display", "none");
                  }
            }

            function marcarJ()
            {
                if( marcadoJ == false)
                   {
                       $("#javascript").css("backgroundColor","#E8F2FF");
                       marcadoJ = true;
                       $("#codigoJavascript").css("display", "block");
                       $("#codigoJavascript").height($(window).height()-$("#head").height());
                       $("#imagenFondo").css("display", "none");
                   }

                  else{
                        $("#javascript").css("backgroundColor","#EDEDED");
                        marcadoJ = false; 
                        $("#codigoJavascript").css("display", "none");
                  }
            }

            function marcarR()
            {
                if( marcadoR == false)
                   {
                       $("#resultado").css("backgroundColor","#E8F2FF");
                       marcadoR = true;
                       $("#codigoResultado").css("display", "block");
                       $("#codigoResultado").height($(window).height()-$("#head").height()+6);
                       $("#imagenFondo").css("display", "none");
                   }

                  else{
                        $("#resultado").css("backgroundColor","#EDEDED");
                        marcadoR = false; 
                        $("#codigoResultado").css("display", "none");
                              }
                        }

// Cambiar contenido del Iframe //

actualizarSalida();
$("textarea").on("change keyup paste", function(){
            actualizarSalida();
});
                 

     
// Recargar páginas //

 $("#logo").click(recargarPagina);
 function recargarPagina()
    {
          location.reload();
    }
            



    