let burger = document.getElementById('burger_menu_main')
let blurBgActive = document.querySelector('.blurBg')

function openBurger (){
    burger.classList.add('openBurger')
    blurBgActive.classList.add('blurBgActive')
}

function closeBurger (){
    burger.classList.remove('openBurger')
    blurBgActive.classList.remove('blurBgActive')
}

