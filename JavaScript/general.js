function init() {
   document.getElementById("main-nav-user").onclick = function() {
      let mainNavExtension = document.getElementById("main-nav-extension");

      mainNavExtension.classList.toggle("hidden");
   }

   /* btn-mobile-menu */
   const menuButton = document.querySelectorAll(".icon-mobile-nav");
   const mainNavText = document.getElementById("main-nav-text");

   menuButton.forEach(button => {
      button.addEventListener("click", () => {
         removeHiddenClasses();
         button.classList.add("hidden");
         mainNavText.classList.toggle("hidden");
      });
   });

   function removeHiddenClasses() {
      menuButton.forEach(button => {
         button.classList.remove("hidden");
      });
   };
}

addEventListener("load", init, false);