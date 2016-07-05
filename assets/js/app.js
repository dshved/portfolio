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

  // Смещение background
  $(function() {
    var x = 0;
    setInterval(function() {
      x -= 1;
      $('.wrapper').css('background-position', x + 'px 0');
    }, 100);
  })
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgLy9TcGlubmVyXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICQoXCIjcGFnZS1wcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmJnXCIpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcbiAgfSwgNDAwMCk7XHJcblxyXG4gICQoJy5jb3VudGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykucHJvcCgnQ291bnRlcicsIDApLmFuaW1hdGUoe1xyXG4gICAgICBDb3VudGVyOiAkKHRoaXMpLnRleHQoKVxyXG4gICAgfSwge1xyXG4gICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgZWFzaW5nOiAnc3dpbmcnLFxyXG4gICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcclxuICAgICAgICAkKHRoaXMpLnRleHQoTWF0aC5jZWlsKG5vdykgKyAnJScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8g0KHQvNC10YnQtdC90LjQtSBiYWNrZ3JvdW5kXHJcbiAgJChmdW5jdGlvbigpIHtcclxuICAgIHZhciB4ID0gMDtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICB4IC09IDE7XHJcbiAgICAgICQoJy53cmFwcGVyJykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgeCArICdweCAwJyk7XHJcbiAgICB9LCAxMDApO1xyXG4gIH0pXHJcbn0pO1xyXG4iXSwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
