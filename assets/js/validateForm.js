//Валидация форм авторизации и отправки сообщений
var validateForm = (function() {

  function init() {
    _setUpListners();
  }

  function _setUpListners() {
    $('#auth').submit(_auth);
    $('#feedback').submit(_sendMessage);
    $('#user_human').click(_check);
    $('body').on('click', '.error__close', _closeMsg);
  }

  function _sendMessage(e) {
    e.preventDefault();
    var result = _validateMessageForm();

    if (result === true) {
      _errorMessage('Ваше сообщение успешно отправлено!');
      document.getElementById("feedback").reset();
    } else {
      _errorMessage(result['message']);

    }

  }


  function _closeMsg(e) {
    e.preventDefault();
    $('.error').remove();
    $('body').css('overflow', 'auto');
  }

  function _check() {

    if ($(this).is(':checked')) {
      $('#human_yes').prop("disabled", false);
      $('#human_no').prop("disabled", false);
    } else {
      $('#human_yes').prop("disabled", true);
      $('#human_no').prop("disabled", true);
    }

  }

  function _errorMessage(message) {
    var msg = '<div class="error">' +
      '<div class="error__container">' +
      '<a href="#" class="error__close">' +
      '<i class="fa fa-times-circle" aria-hidden="true"></i></a>' +
      '<div class="error__message">' + message + '</div></div></div>';
    $('body').prepend(msg);
    $('.error').css('top', $('body').scrollTop() + 'px');
    $('body').css('overflow', 'hidden');
  };

  //функция проверки корректно введенного email
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  //удаление лишних пробелов
  function replaceSpace(value) {
    var reg_pusto = value.replace(/[\s{2,}]+/g, ' ');
    if (reg_pusto === '' || reg_pusto === ' ') {
      return true;
    } else {
      return false;
    }

  }



  function _validateMessageForm() {
    var $this = $(this),
      form = $('#feedback'),
      user_name = form.find('#user_name'),
      user_email = form.find('#user_email'),
      msg_text = form.find('#msg_text'),
      obj = {};
    var validEmail = isEmail(user_email.val());

    if (replaceSpace(user_name.val()) || replaceSpace(user_email.val()) || replaceSpace(msg_text.val()))
    {
      obj.valid = false;
      obj.message = "Вы заполнили не все поля!";
      return obj;
    } 
    if (!validEmail)  {
      obj.valid = false;
      obj.message = "Введите корректный Email!";
      return obj;
    }

    return true;

  }


  function _validateAuthForm() {
    var $this = $(this),
      form = $('#auth'),
      user_login = form.find('#user_login'),
      user_pass = form.find('#user_pass'),
      user_human = form.find('#user_human'),
      human_yes = form.find('#human_yes'),
      obj = {};

    if (replaceSpace(user_login.val()) || replaceSpace(user_pass.val())) {
      obj.valid = false;
      obj.message = "Вы заполнили не все поля!";
      return obj;
    }

    if (!user_human.prop('checked') || !human_yes.prop('checked')) {
      obj.valid = false;
      obj.message = "Роботам тут не место!";
      return obj;
    }

    return true;

  }

  function _auth(e) {
    e.preventDefault();
    var form = $('#auth'),
      result = _validateAuthForm();

    if (result === true) {
      location.href = 'admin.html';
      document.getElementById("auth").reset();
    } else {
      _errorMessage(result['message']);

    }
  }


  return {
    init: init
  }
})();

validateForm.init();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2YWxpZGF0ZUZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy/QktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0Lwg0LDQstGC0L7RgNC40LfQsNGG0LjQuCDQuCDQvtGC0L/RgNCw0LLQutC4INGB0L7QvtCx0YnQtdC90LjQuVxyXG52YXIgdmFsaWRhdGVGb3JtID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9zZXRVcExpc3RuZXJzKCkge1xyXG4gICAgJCgnI2F1dGgnKS5zdWJtaXQoX2F1dGgpO1xyXG4gICAgJCgnI2ZlZWRiYWNrJykuc3VibWl0KF9zZW5kTWVzc2FnZSk7XHJcbiAgICAkKCcjdXNlcl9odW1hbicpLmNsaWNrKF9jaGVjayk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5lcnJvcl9fY2xvc2UnLCBfY2xvc2VNc2cpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3NlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciByZXN1bHQgPSBfdmFsaWRhdGVNZXNzYWdlRm9ybSgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgX2Vycm9yTWVzc2FnZSgn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+IScpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWRiYWNrXCIpLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfZXJyb3JNZXNzYWdlKHJlc3VsdFsnbWVzc2FnZSddKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIF9jbG9zZU1zZyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcuZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2F1dG8nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jaGVjaygpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAkKCcjaHVtYW5feWVzJykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgJCgnI2h1bWFuX25vJykucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJyNodW1hbl95ZXMnKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQoJyNodW1hbl9ubycpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfZXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgIHZhciBtc2cgPSAnPGRpdiBjbGFzcz1cImVycm9yXCI+JyArXHJcbiAgICAgICc8ZGl2IGNsYXNzPVwiZXJyb3JfX2NvbnRhaW5lclwiPicgK1xyXG4gICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVycm9yX19jbG9zZVwiPicgK1xyXG4gICAgICAnPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPicgK1xyXG4gICAgICAnPGRpdiBjbGFzcz1cImVycm9yX19tZXNzYWdlXCI+JyArIG1lc3NhZ2UgKyAnPC9kaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICQoJ2JvZHknKS5wcmVwZW5kKG1zZyk7XHJcbiAgICAkKCcuZXJyb3InKS5jc3MoJ3RvcCcsICQoJ2JvZHknKS5zY3JvbGxUb3AoKSArICdweCcpO1xyXG4gICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgfTtcclxuXHJcbiAgLy/RhNGD0L3QutGG0LjRjyDQv9GA0L7QstC10YDQutC4INC60L7RgNGA0LXQutGC0L3QviDQstCy0LXQtNC10L3QvdC+0LPQviBlbWFpbFxyXG4gIGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcclxuICAgIHZhciByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgLy/Rg9C00LDQu9C10L3QuNC1INC70LjRiNC90LjRhSDQv9GA0L7QsdC10LvQvtCyXHJcbiAgZnVuY3Rpb24gcmVwbGFjZVNwYWNlKHZhbHVlKSB7XHJcbiAgICB2YXIgcmVnX3B1c3RvID0gdmFsdWUucmVwbGFjZSgvW1xcc3syLH1dKy9nLCAnICcpO1xyXG4gICAgaWYgKHJlZ19wdXN0byA9PT0gJycgfHwgcmVnX3B1c3RvID09PSAnICcpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBfdmFsaWRhdGVNZXNzYWdlRm9ybSgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgIGZvcm0gPSAkKCcjZmVlZGJhY2snKSxcclxuICAgICAgdXNlcl9uYW1lID0gZm9ybS5maW5kKCcjdXNlcl9uYW1lJyksXHJcbiAgICAgIHVzZXJfZW1haWwgPSBmb3JtLmZpbmQoJyN1c2VyX2VtYWlsJyksXHJcbiAgICAgIG1zZ190ZXh0ID0gZm9ybS5maW5kKCcjbXNnX3RleHQnKSxcclxuICAgICAgb2JqID0ge307XHJcbiAgICB2YXIgdmFsaWRFbWFpbCA9IGlzRW1haWwodXNlcl9lbWFpbC52YWwoKSk7XHJcblxyXG4gICAgaWYgKHJlcGxhY2VTcGFjZSh1c2VyX25hbWUudmFsKCkpIHx8IHJlcGxhY2VTcGFjZSh1c2VyX2VtYWlsLnZhbCgpKSB8fCByZXBsYWNlU3BhY2UobXNnX3RleHQudmFsKCkpKVxyXG4gICAge1xyXG4gICAgICBvYmoudmFsaWQgPSBmYWxzZTtcclxuICAgICAgb2JqLm1lc3NhZ2UgPSBcItCS0Ysg0LfQsNC/0L7Qu9C90LjQu9C4INC90LUg0LLRgdC1INC/0L7Qu9GPIVwiO1xyXG4gICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSBcclxuICAgIGlmICghdmFsaWRFbWFpbCkgIHtcclxuICAgICAgb2JqLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgIG9iai5tZXNzYWdlID0gXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBFbWFpbCFcIjtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gX3ZhbGlkYXRlQXV0aEZvcm0oKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICBmb3JtID0gJCgnI2F1dGgnKSxcclxuICAgICAgdXNlcl9sb2dpbiA9IGZvcm0uZmluZCgnI3VzZXJfbG9naW4nKSxcclxuICAgICAgdXNlcl9wYXNzID0gZm9ybS5maW5kKCcjdXNlcl9wYXNzJyksXHJcbiAgICAgIHVzZXJfaHVtYW4gPSBmb3JtLmZpbmQoJyN1c2VyX2h1bWFuJyksXHJcbiAgICAgIGh1bWFuX3llcyA9IGZvcm0uZmluZCgnI2h1bWFuX3llcycpLFxyXG4gICAgICBvYmogPSB7fTtcclxuXHJcbiAgICBpZiAocmVwbGFjZVNwYWNlKHVzZXJfbG9naW4udmFsKCkpIHx8IHJlcGxhY2VTcGFjZSh1c2VyX3Bhc3MudmFsKCkpKSB7XHJcbiAgICAgIG9iai52YWxpZCA9IGZhbHNlO1xyXG4gICAgICBvYmoubWVzc2FnZSA9IFwi0JLRiyDQt9Cw0L/QvtC70L3QuNC70Lgg0L3QtSDQstGB0LUg0L/QvtC70Y8hXCI7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VyX2h1bWFuLnByb3AoJ2NoZWNrZWQnKSB8fCAhaHVtYW5feWVzLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgICBvYmoudmFsaWQgPSBmYWxzZTtcclxuICAgICAgb2JqLm1lc3NhZ2UgPSBcItCg0L7QsdC+0YLQsNC8INGC0YPRgiDQvdC1INC80LXRgdGC0L4hXCI7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2F1dGgoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZvcm0gPSAkKCcjYXV0aCcpLFxyXG4gICAgICByZXN1bHQgPSBfdmFsaWRhdGVBdXRoRm9ybSgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgbG9jYXRpb24uaHJlZiA9ICdhZG1pbi5odG1sJztcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRoXCIpLnJlc2V0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfZXJyb3JNZXNzYWdlKHJlc3VsdFsnbWVzc2FnZSddKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGluaXRcclxuICB9XHJcbn0pKCk7XHJcblxyXG52YWxpZGF0ZUZvcm0uaW5pdCgpO1xyXG4iXSwiZmlsZSI6InZhbGlkYXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
