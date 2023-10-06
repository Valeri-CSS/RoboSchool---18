let is_open = 0;

const menu = document.querySelector('.header-menu-mobile');
const submenu = document.querySelector('.header-nav-mobile');
menu.addEventListener('click', () => { submenu.style.display = 'grid' });


const closemenu = document.querySelector('.close');
closemenu.addEventListener('click', () => { submenu.style.display = 'none' });

const attention = document.querySelector('.exclamation');
const freeplace = document.querySelector('.attention');
attention.addEventListener('click', () => {
    if
        (is_open == 0) { freeplace.style.display = 'block'; is_open = 1; }
    else { freeplace.style.display = 'none'; is_open = 0; }
});

const education = document.querySelector(".education");
const educationopen = document.querySelector(".info");
education.addEventListener("click", () => {
    if (is_open == 0) { educationopen.style.display = 'block'; is_open = 1; }
    else { educationopen.style.display = 'none'; is_open = 0; }
});

const closeinfo = document.querySelector(".X");
const infocard = document.querySelector(".irina");
closeinfo.addEventListener("click", () => { infocard.style.display = "none" });

const irinamore = document.querySelector(".more");
irinamore.addEventListener("click", () => { infocard.style.display = "block" });


