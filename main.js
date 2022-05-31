const card = document.querySelector('.card')
const container = document.querySelector('container')
const ratingPanel = document.querySelector('.front-card')
const thankYouPanel = document.querySelector('.back-card')

const buttons = document.querySelector('.ratingButtons').addEventListener('click', applyRating)
const submitButton = document.querySelector('#submit').addEventListener('click', submitPanel)

const userRating = document.querySelector('#userRating')
let rating

async function applyRating(e){
  // remove the previous selected rating, if any
  let prevSelected = document.querySelector('.selected')
  if (prevSelected && e.target.classList.contains('circle')){
    prevSelected.classList.remove('selected')
  }
  // apply the 'selected' class to the rating button
  if (e.target.classList.contains('circle')){
    e.target.classList.add('selected')
    // grab the rating score
   rating = e.target.dataset.rating
  }
}

async function submitPanel(){
  // add flip to card
  card.classList.add('is-flipped')
  // display rating
  userRating.textContent = rating
}
