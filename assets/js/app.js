$(document).ready(function() {
  //Смещение background
  $(function() {
    var x = 0;
    setInterval(function() {
      x -= 1;
      $('.wrapper').css('background-position', x + 'px 0');
    }, 50);
  })

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsi0KHQvNC10YnQtdC90LjQtSBiYWNrZ3JvdW5kXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHggPSAwO1xyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgeCAtPSAxO1xyXG4gICAgJCgnLndyYXBwZXInKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCB4ICsgJ3B4IDAnKTtcclxuICB9LCA1MCk7XHJcbn0pXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgLy9TcGlubmVyXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICQoXCIjcGFnZS1wcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmJnXCIpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgfSwgNDAwMCk7XHJcblxyXG4gICQoJy5jb3VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucHJvcCgnQ291bnRlcicsIDApLmFuaW1hdGUoe1xyXG4gICAgICBDb3VudGVyOiAkKHRoaXMpLnRleHQoKVxyXG4gICAgfSwge1xyXG4gICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgZWFzaW5nOiAnc3dpbmcnLFxyXG4gICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcclxuICAgICAgICAkKHRoaXMpLnRleHQoTWF0aC5jZWlsKG5vdykgKyAnJScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
