const b1 = document.getElementsByClassName("b1")[0];
const b2 = document.getElementsByClassName("b2")[0];
const b3 = document.getElementsByClassName("b3")[0];
const b4 = document.getElementsByClassName("b4")[0];
const button = document.getElementsByClassName("sub")[0];
var arr=[];





b1.addEventListener('mouseenter', ()=>{
    
    arr.push("public area");
   
    console.log(" public area");
});

  
 
b2.addEventListener('mouseenter', ()=>{
    arr.push("security area");
    console.log("security area");
});

b3.addEventListener('mouseenter', ()=>{
    arr.push("Unauthorized area");
    console.log("Unauthorized area");
});

b4.addEventListener('mouseenter', ()=>{
    arr.push("Danger Zone");
    console.log("Danger Zone");
});

b4.addEventListener('click', ()=>{
    alert("You are dead!");
   
})

button.addEventListener('click',()=>{
    
        document.getElementsByClassName("out")[0].innerHTML = arr.toString() ;
  
})



