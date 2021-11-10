const one = document.querySelector(".one")
const two = document.querySelector(".two")
const output = document.querySelector(".output")
const calculate = document.querySelector(".calculate")
const counterShower = document.querySelector(".counterShower")
const form  = document.querySelector('form');


one.innerHTML = random()
two.innerHTML = random()
var counter = 0
counterShower.innerHTML = "Points: " + counter

calculate.addEventListener('click', function () {


   if (parseFloat(one.innerHTML) + parseFloat(two.innerHTML) == output.value) {
      counter++
      counterShower.innerHTML = "Points: " + counter
      counterShower.style.color = "green"

      setTimeout(won, 1000)


      one.innerHTML = random()
      two.innerHTML = random()
      output.value = ""
   } else {
      counterShower.style.color = "red"

      setTimeout(lost, 1000)
      counter--
      counterShower.innerHTML = "Points: " + counter
      output.value = "" 

   }

})





function random() {

   return Math.floor(Math.random() * 200)

}


function lost() {

   counterShower.style.color = "black"

}


function won() {

   counterShower.style.color = "black"

}