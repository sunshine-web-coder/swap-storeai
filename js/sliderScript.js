$('.token_container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
        breakpoint: 950,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 2
            }
        },
        {
        breakpoint: 600,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
    ]
    });