// console.log("RUNNING")
var date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();


// Shopping increment by plus

let addplus = document.getElementById('increment-plus');

let int = document.getElementById('number-bag');

let integer = 0;

addplus.addEventListener ('click', function(){
integer += 1;
int.innerHTML = integer;
})

// Shopping increment by heart 
let addheart = document.getElementById('increment-heart');

let intheart = document.getElementById('number-heart');

let integerheart = 0;

addheart.addEventListener ('click', function(){
integerheart += 1;
intheart.innerHTML = integerheart;
}) 
// Cookie Policy 

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click",() => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed","true")
});

setTimeout( () =>{
  if(!localStorage.getItem("cookieBannerDisplayed"))
  cookieContainer.classList.add("active")
}, 2000)
