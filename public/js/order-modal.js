var modalbtn = document.getElementsByClassName('more-info-btn');
var modalbg = document.querySelector('.order-modal-bg');
var orderpage = document.querySelector('#order-page')
var closebtn = document.querySelector('#modal-close-btn');


for (let i = 0; i < modalbtn.length; i++) {
    modalbtn[i].addEventListener('click',function(){
        modalbg.classList.add('modal-active');
        orderpage.classList.add('bg-blur');
    
    });
};

closebtn.addEventListener('click',function(){
    modalbg.classList.remove('modal-active');
    orderpage.classList.remove('bg-blur');
});
