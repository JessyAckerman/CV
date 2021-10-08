
$("ul .icon").click(function () {
  $(this).addClass("pressed");
  $("li").toggle("barToggle");
  setTimeout(function(){
    $("ul .icon").removeClass("pressed");
  },150);
});

$("ul li a").click(function(){
  $(this).addClass("pressed");
  setTimeout(function() {
    $("ul li a").removeClass("pressed");
  }, 150);
});

$("ul h3").click(function () {
  $(this).addClass("pressed");
  setTimeout(function(){
    $("ul h3").removeClass("pressed");
  },150);
});

$(".aboutme").click(function(){
  $(this).addClass("pressed");
  setTimeout(function(){
    $(".aboutme").removeClass("pressed");
  },150);
});
