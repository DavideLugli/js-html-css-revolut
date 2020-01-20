
$(document).ready(
  function () {
    $('li.dropdown_wrapper a').mouseover(
      function () {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
