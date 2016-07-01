//Slider Module
var Slider = (function() {
  var currentImg = 1;

  function init() {
    _setUpListners();
  }

  function _setUpListners() {
    $('.slider__link-right').on('click', _nextSlide);
    $('.slider__link-left').on('click', _prevSlide);
  }

  function _nextImg() {
    var container = $('.slider__next'),
      items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');
    var reqItem = items.eq(currentImg - 2);

    activeItem.animate({
      'bottom': '100%'
    }, 300);

    reqItem.animate({
      'bottom': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('bottom', '-100%');
      $(this).addClass('active');
    });
  }

  function _prevImg() {
    var container = $('.slider__prev'),
      items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');
    var reqItem = items.eq(currentImg - 2);

    activeItem.animate({
      'top': '100%'
    }, 300);
    reqItem.animate({
      'top': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('top', '-100%');
      $(this).addClass('active');
    });
  }

  function _nextSlide(e) {
    e.preventDefault();
    var bigSlide = $('.slider__center'),
      img = bigSlide.find('img');
    var container = $('.slider__next');
    var items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');

    var slider_info = $('.slider__info');
    var slider_info_items = slider_info.find('.slider__info-item');
    var slider_info_active = slider_info.find('.slider__info-item.active');


    currentImg++;
    if (currentImg >= items.length) {
      currentImg = 0;
    }

    var reqItem = items.eq(currentImg),
      reqInfo = slider_info_items.eq(currentImg-1);
    reqImg = items.eq(currentImg - 1).find('img');

    activeItem.animate({
      'bottom': '100%'
    }, 300);

    img.css({ opacity: '0' });

    setTimeout(function() {
      img.attr('src', reqImg.attr('src'));
      img.css({
        opacity: '1',
        transition: 'all .3s'
      });
    }, 300);



    reqItem.animate({
      'bottom': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('bottom', '-100%');
      slider_info_active.removeClass('active');
      reqInfo.addClass('active');
      $(this).addClass('active');
    });
    _prevImg();
  }

  function _prevSlide(e) {
    e.preventDefault();
    var bigSlide = $('.slider__center'),
      img = bigSlide.find('img');
    var container = $('.slider__prev');
    var items = container.find('.slider__item'),
      activeItem = container.find('.slider__item.active');

    var slider_info = $('.slider__info');
    var slider_info_items = slider_info.find('.slider__info-item');
    var slider_info_active = slider_info.find('.slider__info-item.active');

    currentImg--;
    var reqItem = items.eq(currentImg),
      reqImg = items.eq(currentImg + 1).find('img');
      reqInfo = slider_info_items.eq(currentImg);
    if (currentImg < 0) {
      currentImg = items.length - 1;
    }

    activeItem.animate({
      'top': '100%'
    }, 300);

    img.css({ opacity: '0' });

    setTimeout(function() {
      img.attr('src', reqImg.attr('src'));
      img.css({
        opacity: '1',
        transition: 'all .3s'
      });
    }, 300);

    reqItem.animate({
      'top': '0%'
    }, 300, function() {
      activeItem.removeClass('active').css('top', '-100%');
      slider_info_active.removeClass('active');
      reqInfo.addClass('active');
      $(this).addClass('active');
    });
    _nextImg();
  }

  return {
    init: init
  }
})();

Slider.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9TbGlkZXIgTW9kdWxlXHJcbnZhciBTbGlkZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGN1cnJlbnRJbWcgPSAxO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9zZXRVcExpc3RuZXJzKCkge1xyXG4gICAgJCgnLnNsaWRlcl9fbGluay1yaWdodCcpLm9uKCdjbGljaycsIF9uZXh0U2xpZGUpO1xyXG4gICAgJCgnLnNsaWRlcl9fbGluay1sZWZ0Jykub24oJ2NsaWNrJywgX3ByZXZTbGlkZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfbmV4dEltZygpIHtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19uZXh0JyksXHJcbiAgICAgIGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgYWN0aXZlSXRlbSA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtLmFjdGl2ZScpO1xyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nIC0gMik7XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICByZXFJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAnYm90dG9tJzogJzAlJ1xyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCdib3R0b20nLCAnLTEwMCUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9wcmV2SW1nKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5zbGlkZXJfX3ByZXYnKSxcclxuICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcbiAgICB2YXIgcmVxSXRlbSA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgLSAyKTtcclxuXHJcbiAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogJzEwMCUnXHJcbiAgICB9LCAzMDApO1xyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfbmV4dFNsaWRlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBiaWdTbGlkZSA9ICQoJy5zbGlkZXJfX2NlbnRlcicpLFxyXG4gICAgICBpbWcgPSBiaWdTbGlkZS5maW5kKCdpbWcnKTtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19uZXh0Jyk7XHJcbiAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcblxyXG4gICAgdmFyIHNsaWRlcl9pbmZvID0gJCgnLnNsaWRlcl9faW5mbycpO1xyXG4gICAgdmFyIHNsaWRlcl9pbmZvX2l0ZW1zID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtJyk7XHJcbiAgICB2YXIgc2xpZGVyX2luZm9fYWN0aXZlID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtLmFjdGl2ZScpO1xyXG5cclxuXHJcbiAgICBjdXJyZW50SW1nKys7XHJcbiAgICBpZiAoY3VycmVudEltZyA+PSBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgY3VycmVudEltZyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcUl0ZW0gPSBpdGVtcy5lcShjdXJyZW50SW1nKSxcclxuICAgICAgcmVxSW5mbyA9IHNsaWRlcl9pbmZvX2l0ZW1zLmVxKGN1cnJlbnRJbWctMSk7XHJcbiAgICByZXFJbWcgPSBpdGVtcy5lcShjdXJyZW50SW1nIC0gMSkuZmluZCgnaW1nJyk7XHJcblxyXG4gICAgYWN0aXZlSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ2JvdHRvbSc6ICcxMDAlJ1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICBpbWcuY3NzKHsgb3BhY2l0eTogJzAnIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGltZy5hdHRyKCdzcmMnLCByZXFJbWcuYXR0cignc3JjJykpO1xyXG4gICAgICBpbWcuY3NzKHtcclxuICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuM3MnXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcblxyXG5cclxuICAgIHJlcUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICdib3R0b20nOiAnMCUnXHJcbiAgICB9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jc3MoJ2JvdHRvbScsICctMTAwJScpO1xyXG4gICAgICBzbGlkZXJfaW5mb19hY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICByZXFJbmZvLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIF9wcmV2SW1nKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfcHJldlNsaWRlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBiaWdTbGlkZSA9ICQoJy5zbGlkZXJfX2NlbnRlcicpLFxyXG4gICAgICBpbWcgPSBiaWdTbGlkZS5maW5kKCdpbWcnKTtcclxuICAgIHZhciBjb250YWluZXIgPSAkKCcuc2xpZGVyX19wcmV2Jyk7XHJcbiAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbScpLFxyXG4gICAgICBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW0uYWN0aXZlJyk7XHJcblxyXG4gICAgdmFyIHNsaWRlcl9pbmZvID0gJCgnLnNsaWRlcl9faW5mbycpO1xyXG4gICAgdmFyIHNsaWRlcl9pbmZvX2l0ZW1zID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtJyk7XHJcbiAgICB2YXIgc2xpZGVyX2luZm9fYWN0aXZlID0gc2xpZGVyX2luZm8uZmluZCgnLnNsaWRlcl9faW5mby1pdGVtLmFjdGl2ZScpO1xyXG5cclxuICAgIGN1cnJlbnRJbWctLTtcclxuICAgIHZhciByZXFJdGVtID0gaXRlbXMuZXEoY3VycmVudEltZyksXHJcbiAgICAgIHJlcUltZyA9IGl0ZW1zLmVxKGN1cnJlbnRJbWcgKyAxKS5maW5kKCdpbWcnKTtcclxuICAgICAgcmVxSW5mbyA9IHNsaWRlcl9pbmZvX2l0ZW1zLmVxKGN1cnJlbnRJbWcpO1xyXG4gICAgaWYgKGN1cnJlbnRJbWcgPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRJbWcgPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZUl0ZW0uYW5pbWF0ZSh7XHJcbiAgICAgICd0b3AnOiAnMTAwJSdcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgaW1nLmNzcyh7IG9wYWNpdHk6ICcwJyB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBpbWcuYXR0cignc3JjJywgcmVxSW1nLmF0dHIoJ3NyYycpKTtcclxuICAgICAgaW1nLmNzcyh7XHJcbiAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjNzJ1xyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6ICcwJSdcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjdGl2ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNzcygndG9wJywgJy0xMDAlJyk7XHJcbiAgICAgIHNsaWRlcl9pbmZvX2FjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIHJlcUluZm8uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgX25leHRJbWcoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuU2xpZGVyLmluaXQoKTsiXSwiZmlsZSI6InNsaWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
