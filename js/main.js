/*******************************************
----------- Banner
*******************************************/

/*** Background ***/

$('.banner').on('mouseenter',function(e){
  $('.banner__background-circle').addClass('active');
});

$('.banner').on('mouseleave',function(e){
  $('.banner__background-circle').removeClass('active');
});

$('.banner').on('mousemove',function(e){

  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $('.banner__background-circle').attr('cx',x).attr('cy',y);


});
