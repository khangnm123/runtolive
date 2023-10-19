$('.slide-runs').owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }
});
$('.slide-md').owlCarousel({
    items:4,
    lazyLoad:true,
    loop:true,
    margin: 10,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
    }
})
$('.slide-run').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        700: {
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:1
        },
        1920:{
            items:1
        },
    }
})
$('.slide-libary').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots:none,
    autoplay:true,
    autoplayTimeout: 3000,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})