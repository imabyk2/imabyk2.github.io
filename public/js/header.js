const oyoy = ()=>{
    const lines = document.querySelector('.lines');
    const mobileMenu = document.querySelector('.mob-hamburger');
    const nav = document.querySelector('.header');
    const bd = document.querySelector('.body-shift');

    // FOR CHANGING CLASS ON CLICK ON 3 LINES
    lines.addEventListener('click',()=>{
        nav.classList.toggle('header-active');
        bd.classList.toggle('body-shift-active')
        lines.classList.toggle('change')
 
    });

    mobileMenu.addEventListener('click',()=>{
        nav.classList.toggle('header-active');
        mobileMenu.classList.toggle('change2');
        mobileMenu.classList.toggle('position-fixed')
 
    });
}
// MASTER FUNCTION TO CALL ALL THE FUNCTION


oyoy();
