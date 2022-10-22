function init() {
   // step section silde in
   // testimonials section fade in
   const boxes = document.querySelectorAll(".scrolling-box");
   const testimonialsCard = document.querySelectorAll('.testimonials-card')

   window.addEventListener("scroll", checkBoxes);

   checkBoxes();

   function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4;

      boxes.forEach(box => {
         const boxTop = box.getBoundingClientRect().top;

         if(boxTop < triggerBottom) {
            box.classList.add("show");
         } else {
            box.classList.remove("show");
         }
      });
         
      testimonialsCard.forEach(card => {
         const cardTop = card.getBoundingClientRect().top;

         if(cardTop < triggerBottom) {
            card.classList.add("fade-in");
         } else {
            card.classList.remove("fade-in");
         }
      });  
   }

   // PROGRESS STEPS AND BUTTONS
   const progressLine = document.getElementById('progress-line');
   const prev = document.getElementById('prev');
   const next = document.getElementById('next');
   const circles = document.querySelectorAll('.circle');
   const progress = document.querySelectorAll('.progress');

   let currentActive = 1; 

   next.addEventListener('click', function() {
      currentActive++;

      if (currentActive > circles.length) {
         currentActive = circles.length;
      }
      
      update();
      updateProgress();
   });
   
   prev.addEventListener('click', function() {
      currentActive--;

      if (currentActive < 1) {
         currentActive = 1;
      }

      update();
      updateProgress();
   })
   
   function update() {
      circles.forEach((circle, idx) => {
         if (idx < currentActive) {
            circle.classList.add('progress-active');
         } else {
            circle.classList.remove('progress-active');
         }
      })

      const actives = document.querySelectorAll('.progress-active');

      progressLine.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

      if (currentActive === 1) {
         prev.disabled = true;
         prev.style.backgroundColor = "#eee";
      } else if (currentActive === circles.length) {
         next.disabled = true;
         next.style.backgroundColor = "#eee";
      } else {
         prev.disabled = false;
         next.disabled = false;
         prev.style.backgroundColor = "#7AD7A7";
         next.style.backgroundColor = "#7AD7A7";
      }
   }

   function updateProgress() {
      idx = currentActive - 1;
      progress.forEach(progress => {
         progress.classList.add("progress-hide");
      });
      progress[idx].classList.remove("progress-hide");
   }
}

window.addEventListener("load", init, false);