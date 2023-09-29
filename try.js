let selection=document.querySelectorAll("li");
let addToCart=document.querySelectorAll("a");

let imagAll=document.querySelectorAll(".imageDivs");
// let imagLap=document.querySelectorAll(".laptops");
// let imagSho=document.querySelectorAll(".shoes");
// let imagWatch=document.querySelectorAll(".watch");
// let imagPhone=document.querySelectorAll(".phones");



selection.forEach(function(btn){


btn.addEventListener("click", function(){


imagAll.forEach(function(item){


if(item.classList.contains(btn.id)){

    item.style.display="block";

    item.style.display="grid";
}

else{
item.style.display="none";
}})})
})




addToCart.forEach(function(button){


button.addEventListener("click", function(e){

e.preventDefault();

button.innerHTML="Item added";

button.style.background="yellow";




})
})




















































































