//Табы в админке
var Tabs = (function() {

  var init = function() {
    _setUpListners();
  }

  var _setUpListners = function() {
    $('.tabs__control-link').on('click', _tabActive);
  }


  var _tabActive = function(e) {
    e.preventDefault();
    var item = $(this).closest('.tabs__controls-item'),
      contentItem = $('.tabs__item'),
      itemPosition = item.index();
      
    contentItem.eq(itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');
  };



  return {
    init: init
  }

})();

Tabs.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0KLQsNCx0Ysg0LIg0LDQtNC80LjQvdC60LVcclxudmFyIFRhYnMgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gIH1cclxuXHJcbiAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcudGFic19fY29udHJvbC1saW5rJykub24oJ2NsaWNrJywgX3RhYkFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdmFyIF90YWJBY3RpdmUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRhYnNfX2NvbnRyb2xzLWl0ZW0nKSxcclxuICAgICAgY29udGVudEl0ZW0gPSAkKCcudGFic19faXRlbScpLFxyXG4gICAgICBpdGVtUG9zaXRpb24gPSBpdGVtLmluZGV4KCk7XHJcbiAgICAgIFxyXG4gICAgY29udGVudEl0ZW0uZXEoaXRlbVBvc2l0aW9uKVxyXG4gICAgICAuYWRkKGl0ZW0pXHJcbiAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0OiBpbml0XHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcblRhYnMuaW5pdCgpOyJdLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
