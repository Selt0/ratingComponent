# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Kapture%202022-05-31%20at%2017.17.48.gif)

### Links

- Live Site URL: [https://selt0.github.io/ratingComponent/](https://selt0.github.io/ratingComponent/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

I decided to try and make a card flip animation. I learned about backface-visibilty. This allowed me to code the 'front' and 'back' of a card.
```css
.card__face {
  backface-visibility: hidden;
}
```
At first I was looking for a CSS animation library but when I looked up other guides, I saw most of them use the transform:rotate property. Transform with transition are powerful tools to bring your website to life!
```css
.card {
  transition: transform 1s;
  transform-style: preserve-3d;
}
.card__face--back {
  transform: rotateY(180deg);
}

.card.is-flipped {
  transform: rotateY(180deg);
}
```
I used what I learned from my previous project and set an event listener to the parent container holding the buttons. Event delegation saved me the hassle of adding an event listener to each rating.

### Continued development

I want to continue adding subtle animations to my sites. I always think it takes a lot of code to create animations but as I saw in this project, a few lines can do the trick. I will continue to break out of my comfort and expand my arsenal.


## Author

- Website - [Michael Martinez](https://michael-martinez.netlify.app/)
- Twitter - [@MMocomochi](https://twitter.com/MMocomochi)
