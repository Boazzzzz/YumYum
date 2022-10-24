function init() {
   const planCheckbox = document.querySelectorAll('#plan-checkbox');
   const planPrice = document.querySelector('.plan-price');

   planCheckbox[0].addEventListener('click', () => {
      planPrice.innerHTML = '<strong>$</strong>299';
   })
   
   planCheckbox[1].addEventListener('click', () => {
      planPrice.innerHTML = '<p><strong>$</strong>538</p>';
   })
}

window.addEventListener('load', init, false);