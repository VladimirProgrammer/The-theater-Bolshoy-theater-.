
/*просто добавление класса
$( ".manual__block_subcont" ).click(function() {
    $(this).addClass("manual__block_subcont_active")
  });*/

  /*добавить и убрать класс
  $( ".manual__block_subcont" ).click(function() {
    $(this).toggleClass("manual__block_subcont_active")
  });

  /*на чистом JS*/
/*
let processItems = document.querySelectorAll(".manual__block_subcont");

for (let i=0; i < processItems.length; i++) {
    processItems[i].addEventListener('click', function(event){
        this.classList.toggle('manual__block_subcont_active')
    })
}
*/

$( ".ham" ).click(function() {
  $( ".header__small" ).show( "slow", function() {
    // Animation complete.
  });
});

$(".cross").click(function(){
  $(".header__small").hide();
});

$(function() {
  
  var slideCount =  $(".slider ul li").length;
  var slideWidth =  $(".slider ul li").width();
  var slideHeight =  $(".slider ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
  $(".slider ul li:last-child").prependTo($(".slider ul"));
  
  function moveLeft() {
    $(".slider ul").stop().animate({
      left: + slideWidth
    },700, function() {
      $(".slider ul li:last-child").prependTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider ul").stop().animate({
      left: - slideWidth
    },700, function() {
      $(".slider ul li:first-child").appendTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});


