const ratingPanel = document.querySelector('#rating')
const thankYouPanel = document.querySelector('#thankYou')

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
  // grab rating and display in userRating span
  ratingPanel.style.display = 'none'
  thankYouPanel.style.display = 'block'
  userRating.textContent = rating
}
