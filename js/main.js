//LOADER
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    loader.className += ' hidden'
});
//LOADER END

//FIXED TOPBAR
window.onscroll = () =>{
    const header = document.querySelector('.header');
    const Y = window.scrollY

    if(Y>400){
       header.classList.add('header-fixed');      
    } else if(Y<150){
        header.classList.remove('header-fixed');
    }
};
//FIXED TOPBAR END

//MAIN MENU HAMBURGER
const menuButton = document.querySelector('.main-menu-button'); 
const mainMenu = document.querySelector('.main-menu');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('active'); 
});
//MAIN MENU END

//SCROLLUP
const scrollupBtn = document.querySelector('.scrollup');

scrollupBtn.addEventListener('click', () => {     
    window.scrollTop(0, 0);
});

