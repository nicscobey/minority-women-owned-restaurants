$('.navbar-burger').on('click', () => {
    $('#navbarBasicExample').toggle();
    $('.navbar-burger').toggleClass('is-active');
})

$('#restaurant-page-bottom-about-link').on('click', (event) => {
    console.log('A')
    console.log(event.target);
})

let restaurantPageBottomLinks = document.querySelectorAll('.restaurant-page-bottom-link');
let restaurantPageBottomSections = document.querySelectorAll('.restaurant-page-bottom-section');


restaurantPageBottomLinks.forEach((link, index) => {
    $(link).on('click', () => {
        restaurantPageBottomLinks.forEach((link) => {
            $(link).removeClass('is-active');
        })

        restaurantPageBottomSections.forEach((section) => {
            $(section).addClass('is-hidden');
        });
        $(link).toggleClass('is-active');
        $(restaurantPageBottomSections[index]).toggleClass('is-hidden');
    })
})

let restaurantImages = [
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80',
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
];

// let setInitialImg = () => {
//     $('#img-restaurant-page-bottom-photos').css('background-image', `url("${restaurantImages[0]}")`)
// }

// setInitialImg();

let imgNum = 0;

let setRestaurantImages = () => {
    if (imgNum >= restaurantImages.length) {
        imgNum = 0;
    }
    else if (imgNum < 0) {
        imgNum = restaurantImages.length - 1;
    }
    $('#img-restaurant-page-bottom-photos').css('background-image', `url("${restaurantImages[imgNum]}")`)
}

setRestaurantImages(0);

$(document).on('click', (event) => {
    if ($(event.target).is('#right-button-restaurant-page-bottom-photos')) {
        imgNum++;
        setRestaurantImages();
    }
    else if ($(event.target).is('#left-button-restaurant-page-bottom-photos')) {
        imgNum--;
        setRestaurantImages();
    }
})