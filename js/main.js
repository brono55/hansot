var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    loop:true,
    mousewheel: true,
    keyboard: true,
});
