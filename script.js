document.addEventListener('scroll', function() {
    const switchHero = document.querySelector('#arrow');
    const scrollPosition = window.scrollY;
    switchHero.style.top = `${4 - scrollPosition * 0.1}%`;
  });