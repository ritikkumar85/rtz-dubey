// var randomnumber1 = Math.floor(Math.random()*6)+1;

// var randomimage = "dice" + randomnumber1 + ".png";

// var randomimagesource = "images/" + randomimage;

// var image1 = document.querySelectorAll("img")[0];

//  image1.setAttribute("src" , randomimagesource);

// document.querySelectorAll("footer")[0].innerText = "made by Ritik Dubey❤️";

//  var randomnumber2 = Math.floor(Math.random()*6)+1;

// var randomimage2 = "dice" + randomnumber2 + ".png";

// var randomimagesource2 = "images/" + randomimage2;

// var image2 = document.querySelectorAll("img")[1];

//  image2.setAttribute("src" , randomimagesource2);


//  if(randomimagesource>randomimagesource2){
//     document.querySelectorAll("h1")[0].textContent = "Player1 win";
//  }

//  else if(randomimagesource<randomimagesource2){
//     document.querySelectorAll("h1")[0].textContent = "Player2 win"; 
//  }

//  else{
//     document.querySelectorAll("h1")[0].textContent = "Draw"; 
//  }












// --------------------------------------------------------

function test(){
    var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomimage = "dice" + randomnumber1 + ".png";

var randomimagesource = "images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src" , randomimagesource);


 var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomimage2 = "dice" + randomnumber2 + ".png";

var randomimagesource2 = "images/" + randomimage2;

var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src" , randomimagesource2);


 if(randomimagesource>randomimagesource2){
    document.querySelectorAll("h1")[0].textContent = "Player1 win🎲";
    document.querySelector(".main").style.backgroundColor = "#4eaeda";
 }

 else if(randomimagesource<randomimagesource2){
    document.querySelectorAll("h1")[0].textContent = "Player2 win🎲"; 
    document.querySelector(".main").style.backgroundColor = "#4eda99";
 }

 else{
    document.querySelectorAll("h1")[0].textContent = "Draw🎲"; 
    document.querySelector(".main").style.backgroundColor = "#4edada";
 }

}



const btn = document.querySelector(".btn")


btn.addEventListener("click",()=>{
    test()
})

document.querySelectorAll("footer")[0].innerText = "made by Ritik Dubey❤️";

document.addEventListener("keypress" , (event) =>{
    if(event.key==" "){
    test()
    }

}); 


