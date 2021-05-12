var swiper = new Swiper('.swiper-container', {
      // cssMode: true,
      
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
      slidesPerView:3,
      spaceBetween:20
    });