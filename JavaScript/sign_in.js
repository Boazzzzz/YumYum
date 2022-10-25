function init() {

   // input wave animation

   const labels = document.querySelectorAll('.form-controller label')
   
   labels.forEach(label => {
      label.innerHTML = label.innerText
         .split('')
         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
         .join('')
   });

   // Sign in - Sign up

   const signText = document.querySelectorAll('.sign-text');
   const dataInput = document.querySelectorAll('.data-input');

   signText.forEach((text, idx) => {
      text.addEventListener('click', () => {
         removeSignActive();
         removeDataShow();

         text.classList.add('sign-active');
         dataInput[idx].classList.add('data-show');
      });
   });

   function removeSignActive() {
      signText.forEach(text => {
         text.classList.remove('sign-active');
      });
   }
   
   function removeDataShow () {
      dataInput.forEach(input => {
         input.classList.remove('data-show');
      });
   }
}


window.addEventListener('load', init, false);