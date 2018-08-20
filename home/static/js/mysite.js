// text
console.log("hello");

// menu text change
function changeText(text, item)
    {
        var item = document.getElementById(item);
//        item.textContent = "";
        item.textContent = text;
    }
function changeback(text, item)
    {     
        var item = document.getElementById(item);
//        item.textContent = "";
        item.textContent = text;
    }

// swiper 
  window.onload = function () {
    console.log("swiper initialised");  
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
//      loop: true,
      speed: 400,
      spaceBetween: 0,
        
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        
    })
  };