//Смещение background
// $(function() {
//   var x = 0;
//   setInterval(function() {
//     x -= 1;
//     $('.wrapper').css('background-position', x + 'px 0');
//   }, 50);
// })


$(document).ready(function() {
  //Spinner
  setTimeout(function() {
    $("#page-preloader").fadeOut("slow");
    $(".bg").css('visibility', 'visible');
  }, 4000);

  $('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now) + '%');
      }
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy/QodC80LXRidC10L3QuNC1IGJhY2tncm91bmRcclxuLy8gJChmdW5jdGlvbigpIHtcclxuLy8gICB2YXIgeCA9IDA7XHJcbi8vICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbi8vICAgICB4IC09IDE7XHJcbi8vICAgICAkKCcud3JhcHBlcicpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIHggKyAncHggMCcpO1xyXG4vLyAgIH0sIDUwKTtcclxuLy8gfSlcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAvL1NwaW5uZXJcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwYWdlLXByZWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuYmdcIikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICB9LCA0MDAwKTtcclxuXHJcbiAgJCgnLmNvdW50ZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5wcm9wKCdDb3VudGVyJywgMCkuYW5pbWF0ZSh7XHJcbiAgICAgIENvdW50ZXI6ICQodGhpcykudGV4dCgpXHJcbiAgICB9LCB7XHJcbiAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xyXG4gICAgICAgICQodGhpcykudGV4dChNYXRoLmNlaWwobm93KSArICclJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
