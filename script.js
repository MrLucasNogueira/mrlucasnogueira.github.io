var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 30,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})