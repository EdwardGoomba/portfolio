var main = function() {
  $("#top-text").keyup(function() {
   		var top = $(this).val();
    	$(".top-caption").text(top);
  });
  
  $("#bottom-text").keyup(function() {
       var bottom = $(this).val();
  		$(".bottom-caption").text(bottom);
	});
	
	$("#image-url").keyup(function() {
    var url = $(this).val();
    (".thumbnail img").attr("src",url);
  });
};
 
$(document).ready(main);
  
