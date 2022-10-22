function init() {

   // Read more Read less
   document.getElementById("read-more-btn").onclick = function() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("read-more-btn");

      if(dots.style.display === "none") {
         dots.style.display = "inline";
         btnText.innerHTML = "Read more";
         moreText.style.display = "none";
      } else {
         dots.style.display = "none";
         btnText.innerHTML = "Read less";
         moreText.style.display = "inline";
      }
   }

   // double click heart & click heart
   const mealImg = document.querySelector(".meal-img");
   const heartIcon = document.getElementById("heart-icon");

   heartIcon.addEventListener('click', (e) => {
      e.target.classList.toggle('heart-icon-red');
   });


   mealImg.addEventListener('dblclick', (e) => {
      createHeart(e);
      heartIcon.classList.add('heart-icon-red');
   });

   const createHeart = (e) => {
      const heart = document.createElement('span');
      heart.classList.add('heart-icon');
      heart.innerText = '❤';
      heart.style.color = 'red';

      const xAxis = e.clientX;
      const yAxis = e.clientY;

      const offset = e.target.getBoundingClientRect();

      const xInside = xAxis - offset.left;
      const yInside = yAxis - offset.top;

      heart.style.left = `${xInside}px`;
      heart.style.top = `${yInside}px`;

      mealImg.appendChild(heart);
   }
}

window.addEventListener("load", init, false);