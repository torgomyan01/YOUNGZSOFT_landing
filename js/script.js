const {active, none, fix} = {
    active: 'active',
    none: 'd-none',
    fix: 'fix'
}


$('#reviews').slick({
    dots: true,
    prevArrow: `<button class="prev-slider"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="next-slider"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.partners-block').slick({
    dots: true,
    prevArrow: `<button class="prev-partners"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="next-partners"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

let sett = true;
const ourWorksBlock = $('#our-works');

const logoSite = $('.logo-header');

$(window).on('scroll', function (e){
    const scrollTop = $(e.target).scrollTop();
    eventLogo(scrollTop);


    if(scrollTop > ourWorksBlock.offset().top - 300 && sett){
        startNumberAnimation();
        sett = false;
    }
})


$(window).on('load', function (e){
    const scrollTop = $(e.target).scrollTop();
    eventLogo(scrollTop);
})


function eventLogo(scrollTop){
    if(scrollTop > 200){
        logoSite.children('.logo-closed-symbol').addClass('close')
    } else {
        logoSite.children('.logo-closed-symbol').removeClass('close')
    }
}

function startNumberAnimation(){
    const numberAnimation = $('.number-animation');
    numberAnimation.map((index, elem) => {
        const _elem = $(elem);
        const maxCount = +_elem.text();
        const time = _elem.data('time') ? +_elem.data('time') : 5;
        const ms = time * 50;
        const secCount = maxCount / ms;
        let num = 0;

        const interval = setInterval(() => {
            num += secCount;
            _elem.text(num.toFixed());
            if(num > maxCount){
                clearInterval(interval)
            }
        }, 1)

    })
}




const menuSite = $('#menu-site');

menuSite.on('click', function (){
    const parent = $(this).parent();
    if(parent.hasClass(active)){
        parent.removeClass(active);
        logoSite.removeClass('hide')
        $(this).html('<i class="fa-solid fa-bars"></i>');
    } else {
        parent.addClass(active);
        logoSite.addClass('hide')
        $(this).html('<i class="fa-solid fa-xmark"></i>');
    }
})


// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})
//
defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})

defaultInput.next('.password').on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        thisElem.removeClass(active);
        thisElem.html(`<i class="fa-regular fa-eye"></i>`)
        thisElem.prev('input').attr('type', 'password');
    } else {
        thisElem.addClass(active);
        thisElem.html(`<i class="fa-regular fa-eye-slash"></i>`);
        thisElem.prev('input').attr('type', 'text');
    }
})

// -------------- FOR DEFAULT INPUT FUNCTION -------------------