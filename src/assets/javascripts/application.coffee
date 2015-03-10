$(document).ready ->
  $('.js-filter-button').click ->
    $(this).toggleClass('nav-link__active')
    $('.js-filter-content').toggle()

  $('.js-custom-select').customSelect();

