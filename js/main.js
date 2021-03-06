

//Cookie Policy 

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click",() => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed","true")
});

setTimeout( () =>{
  if(!localStorage.getItem("cookieBannerDisplayed"))
  cookieContainer.classList.add("active")
}, 2000);

// Get the year
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



// Thumbnails cards  
 let thumbnails = document.getElementsByClassName('thumbnail');

 let activeImages = document.getElementsByClassName('active');

 for (var i=0; i < thumbnails.length; i++) {
  
   thumbnails[i].addEventListener('click', function(){

     if (activeImages.length > 0) {
         activeImages[0].classList.remove('active')
     }

     this.classList.add('active')
     document.getElementById('product-main-image').src = this.src;

   })
 }

 // Read More Button 
 function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// Function show password 

function showPassword() {
  var x = document.getElementById("defaultForm-pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 


// Counter products-page 
$(document).ready(function(){
  $('button').click(function(e){
      var button_classes, value = +$('.counter').val();
      button_classes = $(e.currentTarget).prop('class');        
      if(button_classes.indexOf('up_count') !== -1){
          value = (value) + 1;            
      } else {
          value = (value) - 1;            
      }
      value = value < 0 ? 0 : value;
      $('.counter').val(value);
  });  
  $('.counter').click(function(){
      $(this).focus().select();
  });
});

// Shopping increment by Buy Button
let addspecial = document.getElementById('special-button-2');

let intcart = document.getElementById('number-bag');

let integerspecial = 0;

addspecial.addEventListener ('click', function(){
integerspecial += 1;
intcart.innerHTML = integerspecial;
}) ;

// Loading Cards Ajax request home page  desktop page

var ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
if(ajax.readyState === 4) {
document.getElementById('ajax').innerHTML = ajax.responseText;
  }
};

ajax.open('GET','ajax.html')
function sendAJAX(){
  ajax.send();
  document.getElementById('load').style.display = "none";
}

// Add to Cart button to Wish List
let addcart = document.getElementById('add-cart-btn');

let intcartnumber = document.getElementById('number-bag');

let integerspecialcart = 0;

addcart.addEventListener ('click', function(){
integerspecialcart += 1;
intcartnumber.innerHTML = integerspecialcart;
}) ;
