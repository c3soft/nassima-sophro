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

// Toast contact
// ---------------------------------------------------------------------------
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

toastList.forEach(toast => toast.show());


// Modal 
// ---------------------------------------------------------------------------
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
