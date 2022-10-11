function init() {
   document.getElementById("main-nav-user").onclick = function() {
      let mainNavExtension = document.getElementById("main-nav-extension");

      mainNavExtension.classList.toggle("hidden");
   }
}

addEventListener("load", init, false);