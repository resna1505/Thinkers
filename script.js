$(document).scroll(function(){
    var sticky = $('.header'),
      imgHut = $('.img-hut'),
      pola1 = $('.pola1'),
      pola2 = $('.pola2'),
      pola3 = $('.pola3'),
      pola4 = $('.pola4'),
      pola5 = $('.pola5'),
      cards = $('.cd1 '),
      cards2 = $('.cd2 '),
      memory = $('memory'),
      kotak = $('kotak-hubungi'),
      thinkerCard = $('.thinker-card')
      scroll = $(window).scrollTop();

    imgHut.css({
      'transform': 'translate(0px, '+ scroll /10 + '%)'
    })

    if (scroll >= 1250) { 
      sticky.addClass('fixed'); 
    }else { 
      sticky.removeClass('fixed');
    }

    if(scroll >= 650){
      cards.addClass("fadeInLeft");
    }else{
       cards.removeClass("fadeInLeft");
    }

    if(scroll >= 1000){
      cards2.addClass("fadeInRight");
    }else{
       cards2.removeClass("fadeInRight");
    }

    if(scroll >= 2212){
      thinkerCard.addClass("fadeInDown");
    }else{
      thinkerCard.removeClass("fadeInDown");
    }

    // if(scroll >= 2900){
    //   memory.addClass("fadeInZoom");
    //   kotak.addClass("fadeInZoom");
    // }else{
    //   memory.removeClass("fadeInZoom");
    //   kotak.removeClass("fadeInZoom");
    // }
})

$(document).ready(function(){
   var pola1 = $('.pola1'),
      pola2 = $('.pola2'),
      pola3 = $('.pola3'),
      pola4 = $('.pola4'),
      pola5 = $('.pola5');
      
      // pola1.animate({left:'0',  opacity: 1.0,},"slow")
})

// const burger = document.querySelector('.burger')
// const menu = document.querySelector('.menu-burger')

// burger.addEventListener("click", () => {
//   document.menu.style.display('visible')
// })