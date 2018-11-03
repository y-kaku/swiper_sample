(function () {
    console.log("swiper.js");

    var options = {
        init: false,
        loop: true,
        speed:800,
        slidesPerView: 2, // or 'auto'
        // spaceBetween: 10,
        centeredSlides : true,
        effect: 'coverflow', // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
          rotate: 50, // Slide rotate in degrees
          stretch: 0, // Stretch space between slides (in px)
          depth: 100, // Depth offset in px (slides translate in Z axis)
          modifier: 1, // Effect multipler
          slideShadows : true, // Enables slides shadows
        },
        grabCursor: true,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1023: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        // Events
        on: {
          imagesReady: function(){
            this.el.classList.remove('loading');
          }
        }
      };
    var mySwiper = new Swiper('.swiper-container', options);

/*    
    var mySwiper = new Swiper ('.swiper-container', {
        effect: "flip",
        loop: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        })
*/        
    mySwiper.init();
}());
/*
参考ページ
https://digipress.info/tech/introducing-swiper-js/
http://idangero.us/swiper/api/#events
*/