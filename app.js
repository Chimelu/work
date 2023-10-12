'use strict'
let random =  Math.ceil(Math.random() * 6) ;
console.log(random);
let compGuess = document.querySelector('.comp-guess')
const userGuess =document.querySelector('.user-guess')
let trials = document.querySelector('.trials')
const btn = document.querySelector('.check')
const start = document.querySelector('.start')
const btn1 =  document.querySelector('.again')
const body =document.querySelector('body')
// compGuess.textContent = random
// let at = Number(trials.textContent)
const end = function(trials){
    if(trials.textContent>0){
        trials.textContent--

    }else if(trials.textContent==0){
        window.location.reload()

    }
     
}




btn.addEventListener('click',function(){
    if(+userGuess.value === random){
        console.log('true');
        body.style.backgroundColor='green'

        start.textContent= 'Correct answer😁'
        compGuess.textContent = random

    }else if (+userGuess.value > random){
        start.textContent = 'Too high😒😒'
        userGuess.value=' '
        end(trials)
        

    }else if (+userGuess.value < random){
        start.textContent = 'Too low'
        userGuess.value=' '
        end(trials)
       

    }
    

})
const relo = btn1.addEventListener('click',()=>{
    window.location.reload()
})

