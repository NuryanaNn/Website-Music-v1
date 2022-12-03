let hiddenNav = document.querySelector('.hidden-nav');
let burger = document.querySelector('.burger');
let closing = document.querySelector('.closing')

burger.addEventListener('click', function(){
    hiddenNav.classList.toggle('active');
})

closing.addEventListener('click', function(){
    hiddenNav.classList.remove('active');
})