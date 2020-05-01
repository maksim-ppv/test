$(document).ready(function(){

  $('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.slide').on('click', function() {
    $(this).toggleClass('locked');
  });

let section = document.querySelector('.slick-track');
let divs = section.querySelectorAll('div');
let loc = document.querySelectorAll('.locked');
let slick = document.querySelector('.slick-prev');
  slick.addEventListener('click', () => {
    const section = document.querySelector('.slick-track');
    const divs = section.querySelectorAll('div');
    const loc = document.querySelectorAll('.locked');
    for (var i = 0, j = 0; i <= divs.length-1 ; i++) {
      if (divs[i] == loc.item(0)) {
        i--;
          if(divs.item(0).classList.contains('slick-active')){
            return
          }
        section.insertBefore(loc.item(j),divs[i]);
        return;
      };
    };
  });
  document.querySelector('.slick-next').onclick = function() {
    const section = document.querySelector('.slick-track');
    const divs = section.querySelectorAll('div');
    const loc = document.querySelectorAll('.locked');
    for (var i = 0, j = 0; i <= divs.length-1; i++) {
      if (divs[i] == loc.item(j)) {
           i++;
          if(divs.item(divs.length-1).classList.contains('slick-active')){
            return
          }
          section.insertBefore(loc.item(j),divs[i].nextSibling);
        return;
      }
    }
  }
});


