const backButtons =
  document.querySelectorAll('.back-home');

backButtons.forEach(button => {

  button.addEventListener('click', () => {

    sessionStorage.setItem(
      'scrollToSports',
      'true'
    );

  });

});



document.addEventListener('DOMContentLoaded', () => {

  const shouldScroll =
    sessionStorage.getItem('scrollToSports');

  if(shouldScroll){

    const section =
      document.getElementById('esportes');

    if(section){

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset;

      window.scrollTo(0, y);

    }

    sessionStorage.removeItem(
      'scrollToSports'
    );

  }



  document.documentElement.classList.remove(
    'preload'
  );

});


const navLinks =
  document.querySelectorAll('.nav-link');

navLinks.forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const targetId =
      link.getAttribute('href');

    const section =
      document.querySelector(targetId);

    if(section){

      section.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});