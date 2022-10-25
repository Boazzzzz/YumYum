var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   loopFillGroupWithBlank: true,
   fade: true,
   centerSlide: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true
   },

   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      
      428: {
         slidesPerView: 2,
      },
      
      1024: {
         slidesPerView: 3,
      },
   }
});

// meal feature texts

const featureTexts = document.querySelectorAll(".meal-feature-text");

featureTexts.forEach(text => {
   text.addEventListener("click", () => {
      removeActive();
      text.classList.add("meal-feature-text-active");
   })
})

function removeActive() {
   featureTexts.forEach(text => {
      text.classList.remove("meal-feature-text-active");
   })
}