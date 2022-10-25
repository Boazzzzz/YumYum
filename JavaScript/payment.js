function init() {

   // credit card

   var cardNumberInput = document.querySelector('.card-number-input');
   var cardNumber = document.querySelector('.card-number-box');

   var cardNameInput = document.querySelector('.card-name-input');
   var cardHolderName = document.querySelector('.card-holder-name');

   const monthInput = document.querySelector('.month-input');
   const expMonth = document.querySelector('.exp-month');
   
   const yearInput = document.querySelector('.year-input');
   const expYear = document.querySelector('.exp-year');

   const cvvInput = document.querySelector('.cvv-input');
   const cardFront = document.querySelector('.card-front');
   const cardBack = document.querySelector('.card-back');
   const cvvBox = document.querySelector('.cvv-box');
   
   cardNumberInput.addEventListener('input', (e) => {
      cardNumber.innerText = e.target.value;
   });
   
   cardNameInput.addEventListener('input', (e) => {
      cardHolderName.innerText = e.target.value;
   });
   
   monthInput.addEventListener('input', (e) => {
      expMonth.innerText = e.target.value;
   });
   
   yearInput.addEventListener('input', (e) => {
      expYear.innerText = e.target.value;
   });
   
   cvvInput.addEventListener('mouseenter', () => {
      cardFront.style.transform = 'perspective(1000px) rotateY(-180deg)';
      cardBack.style.transform = 'perspective(1000px) rotateY(0)';
   });
   
   cvvInput.addEventListener('mouseleave', () => {
      cardFront.style.transform = 'perspective(1000px) rotateY(0)';
      cardBack.style.transform = 'perspective(1000px) rotateY(180deg)';
   });

   cvvInput.addEventListener('input', (e) => {
      cvvBox.innerText = e.target.value;
   });
}

window.addEventListener('load', init, false);