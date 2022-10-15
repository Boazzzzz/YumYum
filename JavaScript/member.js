function init() {
   document.getElementById("search-bar").onclick = function() {
      document.getElementById("search-bar").style.width = "80%";
   }

   document.getElementById("go-back").addEventListener("click", () => {
      history.back();
    });

   // window.onclick = function() {
   //    if(document.getElementById("search-bar").style.width == "100%") {
   //       document.getElementById("search-bar").style.width = "50%";
   //    }
   // }


   /* TABS */
   const tabContent = document.querySelectorAll(".tab-content");
   const tabButton = document.querySelectorAll(".tab-button");

   tabButton.forEach((button, idx) => {
      button.addEventListener("click", () => {
         hideAllContents();
         hideAllButtons();

         button.classList.add("active");
         tabContent[idx].classList.add("show");
      });
   });

   function hideAllContents() {
      tabContent.forEach(content => content.classList.remove("show"));
   }
   
   function hideAllButtons() {
      tabButton.forEach(button => button.classList.remove("active"));
   }


   /* DRAG MEALS */
   const fills = document.querySelectorAll(".fill");
   const empties = document.querySelectorAll(".empty");

   fills.forEach((fill) => {
      fill.addEventListener("dragstart", dragStart);
      fill.addEventListener("dragend", dragEnd);
   });

   for(const empty of empties) {
      empty.addEventListener("dragover", dragOver);
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", dragDrop);
   }

   function dragStart() {
      this.className += " hold";
      setTimeout(() => this.className = "invisible", 0);
   }
   
   function dragEnd() {
      this.className = "fill";
   }
   
   function dragOver(e) {
      e.preventDefault();
   }
   
   function dragEnter(e) {
      e.preventDefault();
      this.className += " hovered";
   }
   
   function dragLeave() {
      this.className = "empty";
   }
   
   function dragDrop() {
      this.className = "empty"
      this.append(fill);
   }
}

window.addEventListener("load", init, false);