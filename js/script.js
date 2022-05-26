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
});


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