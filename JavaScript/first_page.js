function init() {
   // STEP SECTION SCROLLING
   const boxes = document.querySelectorAll(".scrolling-box");

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

      progress.forEach()
   })
   
   prev.addEventListener('click', function() {
      currentActive--;

      if (currentActive < 1) {
         currentActive = 1;
      }

      update();
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
      } else if (currentActive === circles.length) {
         next.disabled = true;
      } else {
         prev.disabled = false;
         next.disabled = false;
      }
   }
}

window.addEventListener("load", init, false);