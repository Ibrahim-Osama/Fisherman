$('.owl-carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    rtl:true,
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

$('.kind owl-carousel').owlCarousel({
    autoplay:false,
    loop:false,
    margin:15,
    nav:false,
    dots:false,
    rtl:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:0
        },
        1000:{
            items:0
        }
    }
})

