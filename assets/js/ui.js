
function toggleClass(element, className) {
    if(element.parentNode.classList.contains(className)){
      element.parentNode.classList.remove(className);
    }else{
      element.parentNode.classList.add(className);
    };
}
  
function photoSwiper(){
    let photoSwiper = new Swiper(".photosSwiper", {  
        spaceBetween: 0,
        centeredSlides: true,        
        effect: "fade",         
        pagination: {
            el: ".swiper-pagination",
            clickable : true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        watchOverflow : true
    })
}
 


  window.addEventListener("load", function(){    
    photoSwiper();
    const toggle1 = document.querySelector('.portfolio__wrap .btn--toggle');
    toggle1.addEventListener('click',function(){
        toggleClass(toggle1,'open')
    });
    const toggle2 = document.querySelector('.history__design .btn--toggle');
    toggle2.addEventListener('click',function(){
        toggleClass(toggle2,'open')
    });
  })