var menuBtn = document.querySelector('.btn-menu');
var leftMenu = document.querySelector('.left');
var rightMenu = document.querySelector('.right');
var headerMenu = document.getElementById('main-menu');

var main = document.querySelector('main');

var menuBtnTop = document.querySelector('.line-top');
var menuBtnMiddle = document.querySelector('.line-middle');
var menuBtnBottom = document.querySelector('.line-bottom');

var isToggle = false;

menuBtn.addEventListener('click', showMenu);
function showMenu(e) {
    e.preventDefault();

    if (isToggle === false) {
        menuBtnTop.classList.add("line-top__active");
        menuBtnMiddle.classList.add("line-middle__active");
        menuBtnBottom.classList.add("line-bottom__active");

        leftMenu.classList.add('transform-down');
        rightMenu.classList.add('transform-up');
        headerMenu.classList.add('opac');

        main.style.height = '100vh';
        isToggle = true;
    } else {
        menuBtnTop.classList.remove("line-top__active");
        menuBtnMiddle.classList.remove("line-middle__active");
        menuBtnBottom.classList.remove("line-bottom__active");

        leftMenu.classList.remove('transform-down');
        rightMenu.classList.remove('transform-up');
        headerMenu.classList.remove("opac");

        main.style.height = '100%';
        isToggle = false;
    }

}