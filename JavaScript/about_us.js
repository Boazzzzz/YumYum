function init() {
   const panels = document.querySelectorAll(".panel");

   panels.forEach(panel => {
      panel.addEventListener("click", () => {
         removeActiveClasses();
         panel.classList.add("active");
      });
   });

   function removeActiveClasses() {
      panels.forEach(panel => {
         panel.classList.remove("active");
      });
   };
};

window.addEventListener("load", init, false);