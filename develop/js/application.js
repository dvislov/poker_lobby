(function() {
  $(document).ready(function() {
    $('.js-filter-button').click(function() {
      $(this).toggleClass('nav-link__active');
      return $('.js-filter-content').toggle();
    });
    return $('.js-custom-select').customSelect();
  });

}).call(this);
