// Loader 
// ---------------------------------------------------------------------------
// window.onload = function () {
//     window.setTimeout(fadeout, 500);
// }

// function fadeout() {
//     document.querySelector('.preloader').style.opacity = '0';
//     document.querySelector('.preloader').style.display= 'none';
// }

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


// Cookies notification
// ---------------------------------------------------------------------------
// (function () {
//     "use strict";

//     var cookieAlert = document.querySelector(".cookie-alert");
//     var acceptCookies = document.querySelector(".accept-cookies");

//     cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

//     if (!getCookie("acceptCookies")) {
//         cookieAlert.classList.add("show");
//     }

//     acceptCookies.addEventListener("click", function () {
//         setCookie("acceptCookies", true, 60);
//         cookieAlert.classList.remove("show");
//     });
// })();

// Cookie functions stolen from w3schools
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }