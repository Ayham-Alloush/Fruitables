window.addEventListener('scroll', function() {
  const arrowSection = document.getElementById('hasArrow');
  const icon = document.querySelector('#floating-arrow');

  if (arrowSection.offsetTop < window.scrollY + window.innerHeight) {
    icon.classList.remove('d-none') ;
  } else {
    icon.classList.add('d-none') ;
  }
});
