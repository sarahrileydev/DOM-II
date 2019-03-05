// Your code goes here

// one
const one = document.querySelectorAll(".nav-link");
one.forEach(function(index, i){
  one[i].addEventListener('click', function(event) {
      event.target.style.color = 'crimson';
  });
});

// two
const two = document.querySelector(".nav-container");
two.addEventListener("mouseover", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});

// three
window.addEventListener("resize", function() {
  alert("I am resized!");
})

// four

window.addEventListener('scroll', function() {
  console.log("Well, hello there!");
})

// five
const five = document.querySelectorAll('.text-content');

five.forEach(function(index, i){
    five[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'blue';
    });
});

five.forEach(function(index, i){
  five[i].addEventListener('mouseout', function(event) {
      event.target.style.backgroundColor = 'white';
  });
});

// six 
const six = document.querySelector(".nav-container");
six.addEventListener("load", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});

const seven = document.querySelector(".nav-container");
seven.addEventListener("focus", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});

const eight = document.querySelector(".nav-container");
eight.addEventListener("scroll", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});

const nine = document.querySelector(".nav-container");
nine.addEventListener("resize", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});

const ten = document.querySelector(".nav-container");
ten.addEventListener("select", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});