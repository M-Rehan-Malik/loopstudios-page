const menu = document.querySelector('.mobile-menu');
const menuOpenIcon = document.querySelector('.menu-open-icon');
const menuCloseIcon = document.querySelector('.close-icon');

menuOpenIcon.onclick = menuFunction
menuCloseIcon.onclick = menuFunction


function menuFunction() {
    menu.classList.toggle('none')
    document.querySelector('body').classList.toggle('no-overflow')
}