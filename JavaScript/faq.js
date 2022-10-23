function init() {

   // faq button toggle

   const buttons = document.querySelectorAll('.faq-button');

   buttons.forEach(button => {
      button.addEventListener('click', () => {
         button.parentNode.classList.toggle('faq-active');
      });
   });

   // tab active & container show
   
   const tabs = document.querySelectorAll('.tab');
   const faqContainer = document.querySelectorAll('.faq-container');

   tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
         removeActiveTab();
         removeShowFAQ();
         removeFaqAcitve();

         tab.classList.add('tab-active');
         faqContainer[idx].classList.add('faq-show');
      })
   })

   function removeActiveTab() {
      tabs.forEach(tab => {
         tab.classList.remove('tab-active');
      });
   }

   function removeShowFAQ() {
      faqContainer.forEach(container => {
         container.classList.remove('faq-show');
      });
   }

   function removeFaqAcitve() {
      buttons.forEach(button => {
         button.parentNode.classList.remove('faq-active');
      });
   }
}

window.addEventListener('load', init, false);