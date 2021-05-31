// Loader 
// ---------------------------------------------------------------------------
window.onload = function () {
    window.setTimeout(fadeout, 500);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display= 'none';
}

// Navbar personnalisé responsive
// ---------------------------------------------------------------------------

const btnNav = document.getElementById('btnNav');
const mainNavbar = document.getElementById('mainNavbar');
const navbarTogglerDemo02 = document.getElementById('navbarTogglerDemo02');


btnNav.addEventListener('click',() => {
btnNav.classList.toggle('active');
mainNavbar.classList.toggle('js-mainNavbar');
navbarTogglerDemo02.classList.toggle('js-collapseNavbar');
})