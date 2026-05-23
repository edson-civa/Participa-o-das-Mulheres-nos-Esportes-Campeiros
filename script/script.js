const track = document.querySelector('.carousel-track');

const prevBtn = document.querySelector('.prev');

const nextBtn = document.querySelector('.next');



const originalCards =
Array.from(document.querySelectorAll('.sport-card'));



// CLONAR TODOS

originalCards.forEach(card => {

  const clone = card.cloneNode(true);

  track.appendChild(clone);

});



originalCards.slice().reverse().forEach(card => {

  const clone = card.cloneNode(true);

  track.insertBefore(clone, track.firstChild);

});



const cards =
document.querySelectorAll('.sport-card');



let index = originalCards.length;

let isMoving = false;



function getCardWidth(){

  const card = cards[0];

  const gap =
  parseInt(window.getComputedStyle(track).gap);

  return card.offsetWidth + gap;
}



function moveCarousel(animated = true){

  const width = getCardWidth();



  track.style.transition =
    animated
    ? 'transform 0.5s ease'
    : 'none';



  track.style.transform =
  `translateX(-${width * index}px)`;
}



// POSIÇÃO INICIAL

moveCarousel(false);



// NEXT

nextBtn.addEventListener('click', () => {

  if(isMoving) return;

  isMoving = true;

  index++;

  moveCarousel(true);

});



// PREV

prevBtn.addEventListener('click', () => {

  if(isMoving) return;

  isMoving = true;

  index--;

  moveCarousel(true);

});



track.addEventListener('transitionend', () => {

  const total = originalCards.length;



  // PASSOU DO FINAL

  if(index >= total * 2){

    index = total;

    moveCarousel(false);
  }



  // PASSOU DO COMEÇO

  if(index <= total - 1){

    index = total * 2 - 1;

    moveCarousel(false);
  }



  isMoving = false;
});



// RESPONSIVO

window.addEventListener('resize', () => {

  moveCarousel(false);

});