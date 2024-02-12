const 
cardContent = document.querySelectorAll(".card-item"),
alternateButton = document.querySelector("button"),
card = document.getElementById("card");



document.addEventListener("DOMContentLoaded", fadeIn);
alternateButton.addEventListener("click", alternateCard);

function fadeIn(){
  cardContent.forEach((i) => {
    i.classList.remove('fade-in')
    setTimeout(() => {
      i.classList.remove('fade-in-transition')
    }, 1250);
  })
}

function alternateCard(){
card.classList.toggle("alternate")
}

console.log(alternateButton);
