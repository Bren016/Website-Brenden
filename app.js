const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var tabImages = {
    'skills'    : 'images/coaching2.JPG',
    'experience': 'images/laurentide.jpg',
    'education' : 'images/hikeOakcrop.jpg'
}

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


function opentab(tabname) {
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");

    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    document.getElementById('about__img').src = tabImages[tabname]
}
window.onload = function() {
    document.getElementById('about__img').src = tabImages['skills']
    
}
