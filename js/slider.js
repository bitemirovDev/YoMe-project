let prevArrow = document.querySelector('.prev_arrow')
    nextArrow = document.querySelector('.next_arrow')

$('.testimonial_slider_items').slick({
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});