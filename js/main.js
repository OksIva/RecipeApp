//LOADER
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.className += ' hidden'
});
//LOADER END

//MAIN MENU HAMBURGER
const menuButton = document.querySelector('.main-menu-button'); 
const mainMenu = document.querySelector('.main-menu');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('active'); 
});
//MAIN MENU END

//SCROLLUP
const scrollupBtn = document.querySelector('.scrollup');

scrollupBtn.addEventListener('click', () =>{
    window.scrollTop(0, 0);
});
