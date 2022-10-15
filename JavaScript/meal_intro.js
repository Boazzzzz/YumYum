function init() {
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
}

window.addEventListener("load", init, false);