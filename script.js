const hamburger = document.querySelector('.hamburger');
const mobileNavbar = document.querySelector('.mobile-navbar-section');

hamburger.addEventListener('click', e =>{

    mobileNavbar.classList.toggle('show');
    mobileNavbar.classList.add('z-index1');
    if(mobileNavbar.classList.contains('show')){
    hamburger.src="images/icon-close.svg";
    }else{
        hamburger.src="images/icon-hamburger.svg";
        setTimeout(() =>{
            mobileNavbar.classList.remove('z-index1')
        },800);
    }
})