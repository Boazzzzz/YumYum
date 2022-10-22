function init() {

   // SIDE MENU TOGGLE

   const memberNav = document.querySelector(".member-nav");
   const navLinkText = document.querySelectorAll(".nav-link-text");
   const sideMenuToggle = document.querySelectorAll(".side-menu-toggle");
   const logo = document.getElementById("logo");
   const mainContent = document.querySelectorAll(".main-content");
   const mainContentTop = document.querySelectorAll(".main-content-top");

   sideMenuToggle.forEach(e => {
      e.addEventListener("click", () => {
         memberNav.classList.toggle("close");

         logo.classList.toggle("hide");

         navLinkText.forEach(text => {
            text.classList.toggle("hide");
         });

         mainContent.forEach((content) => {
            content.classList.toggle("main-width-toggle");
         });
         
         mainContentTop.forEach((contentTop) => {
            contentTop.classList.toggle("main-top-toggle");
         });
      });
   });

   // tabs
   const navLink = document.querySelectorAll(".nav-link");

   for (let i = 0; i < navLink.length; i++) {
      navLink[i].addEventListener('click', function() {
         tabDisplay(this);
      })
   }

   function tabDisplay(activeTab) {
      for (let i = 0; i < navLink.length; i++) {
         if (navLink[i] == activeTab) {
            mainContent[i].style.display = 'block';
            window.scrollTo(0, 0);
         } else {
            mainContent[i].style.display = 'none';
         }
      }
   }
}

window.addEventListener("load", init, false);