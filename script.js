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

function load(){
  
  var canvas = document.getElementById("canvas");
  var classname = document.getElementsByClassName('videoCall');
  
  canvas.addEventListener("click", function(e){
    e.target.style.zIndex = -10;
    canvas.firstElementChild.src = '';
  });

  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function(){
     
        canvas.firstElementChild.src = this.getAttribute('src');
      
      canvas.style.zIndex = 3;
    });
  }

}

load();