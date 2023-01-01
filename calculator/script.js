let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
     console.log(e)
     string = string + e.target.innerHtml;
     document.querySelector('input').value = string;
   }) 
})








// document.querySelector("button").addEventlistener("click", show);
// function show(event){
//     console.log('btn clicked');
// }

// document.getElementById("btn").addEventListener("click" , function(){
//     alert("hello");
// })

