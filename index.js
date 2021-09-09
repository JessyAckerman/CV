

$("ul .icon").click(function () {
  $(this).addClass("pressed");
  $("ul li").toggle("block");
  $("ul li").removeClass("removeli");
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
  $(this).text("Undone.");
  $(this).addClass("undone");
  setTimeout(function(){
    $(".aboutme").text("About me");
    $(".aboutme").removeClass("undone");
  },1000);
});
