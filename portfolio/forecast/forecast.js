var main = function() {
  $(".day").click(function() {
    $(this).next().toggle();
    $(this).find(".weekday span").toggleClass("glyphicaon-minus");
  });
};

$(document).ready(main);
