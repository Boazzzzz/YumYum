function init() {

   // PROGRAM PRICE 

   const planCheckbox = document.querySelectorAll('#plan-checkbox');
   const planPrice = document.querySelector('.plan-price');

   planCheckbox[0].addEventListener('click', () => {
      planPrice.innerHTML = '<strong>$</strong>299';
   })
   
   planCheckbox[1].addEventListener('click', () => {
      planPrice.innerHTML = '<p><strong>$</strong>538</p>';
   })

   // VERTICAL SLIDER

   const sliderContainer = document.querySelector('.slider-container')
   const slideRight = document.querySelector('.right-slide')
   const slideLeft = document.querySelector('.left-slide')
   const upButton = document.querySelector('.up-button')
   const downButton = document.querySelector('.down-button')
   const slidesLength = slideRight.querySelectorAll('div').length

   let activeSlideIndex = 0

   slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

   upButton.addEventListener('click', () => changeSlide('up'))
   downButton.addEventListener('click', () => changeSlide('down'))

   const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.clientHeight
      if(direction === 'up') {
         activeSlideIndex++
         if(activeSlideIndex > slidesLength - 1) {
               activeSlideIndex = 0
         }
      } else if(direction === 'down') {
         activeSlideIndex--
         if(activeSlideIndex < 0) {
               activeSlideIndex = slidesLength - 1
         }
      }

      slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
      slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
   }

   // features section fade in
   const programFeature = document.querySelectorAll('.program-feature')

   window.addEventListener("scroll", checkBoxes);

   checkBoxes();

   function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4;

      programFeature.forEach(feature => {
         const boxTop = feature.getBoundingClientRect().top;

         if(boxTop < triggerBottom) {
            feature.classList.add("show");
         } else {
            feature.classList.remove("show");
         }
      });
   }
}

window.addEventListener('load', init, false);