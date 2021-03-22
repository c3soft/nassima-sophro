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