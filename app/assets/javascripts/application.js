//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
//= require underscore
//= require gmaps/google
//= require jquery-fileupload/basic
//= require cloudinary/jquery.cloudinary
//= require attachinary


$(document).ready(function() {

$("#owl-example").owlCarousel({

  //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

  //Autoplay
    autoPlay : true,
    stopOnHover : true,
})
});

var fixmeTop = $('.fixme').offset().top;
  $(window).scroll(function() {
      var currentScroll = $(window).scrollTop();
      if (currentScroll >= fixmeTop) {
          $('.fixme').css({
              position: 'fixed',
              top: '220',
          });
      } else {
          $('.fixme').css({
              position: 'fixed',
              top: '220',
          });
      }
  });
