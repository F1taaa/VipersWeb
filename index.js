document.getElementById('logo').addEventListener('click', function() {
    location.reload();
});
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 5000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight 
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()
}

resetTimeAnimation()

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registration-form');
    const button = form.querySelector('.custom-button');
  
    console.log('JavaScript loaded'); // Check if JS file is loaded
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
  
      console.log('Form submitted'); // Check if form submission is intercepted
  
      // Add the animation class
      button.classList.add('animate');
      
      // Remove the animation class after the animation ends
      button.addEventListener('animationend', () => {
        console.log('Animation ended');
        button.classList.remove('animate');
      }, { once: true });
    });
  });
  
  