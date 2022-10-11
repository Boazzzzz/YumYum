function init() {
   document.getElementById("search-bar").onclick = function() {
      document.getElementById("search-bar").style.width = "80%";
   }

   // window.onclick = function() {
   //    if(document.getElementById("search-bar").style.width == "100%") {
   //       document.getElementById("search-bar").style.width = "50%";
   //    }
   // }
}

window.addEventListener("load", init, false);