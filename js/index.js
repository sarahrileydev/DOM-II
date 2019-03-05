// Your code goes here

// one
const one = document.querySelectorAll(".nav-link");
one.forEach(function(index, i){
  one[i].addEventListener('click', function(event) {
      event.target.style.color = 'crimson';
      event.preventDefault();
  });
});

// two
const two = document.querySelector(".nav-container");
two.addEventListener("mouseover", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "teal";
});

const stopProp = document.querySelector("header");
stopProp.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "green";
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
window.addEventListener('load', function() {
  alert("All set!");
})

// seven
const seven = document.querySelector(".footer");
seven.addEventListener("dblclick", function(event) {
  event.stopPropagation();
  event.target.style.backgroundColor = "purple";
});

// eight
const eight = document.querySelector("body");
eight.addEventListener("keydown", function(event) {
  console.log("I've been hit!"); 
});


// nine
const nine = document.querySelector(".logo-heading");
nine.addEventListener("mouseup", function(event) {
  alert("Hi!");
});


// ten 
const ten = document.querySelectorAll("img");
ten.forEach(function(index, i){
  ten[i].addEventListener('wheel', function(event) {
      event.target.style.opacity = .2;
  });
});

