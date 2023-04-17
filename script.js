// Initialize Tilt.js on product cards
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
  const tilt = new Tilt({
    maxTilt: 5,
    perspective: 800,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    scale: 1,
    speed: 800,
    transition: true,
    disableAxis: null,
    reset: true,
  });

  tilt.addCardListeners(card);
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the form from submitting and refreshing the page
  const query = e.target.elements[0].value; // get the search query
  // do something with the search query, like search for products and display the results
});
