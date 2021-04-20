const newdiv = document.createElement("div");
const newdiv1 = document.createElement("div");
const te =document.createElement('h2');

document.body.append(newdiv1);
newdiv1.appendChild(te);
te.textContent="Find out the RGB colors";
newdiv1.style.color="red";
newdiv1.style.width="60%";
newdiv1.style.margin="auto";


document.body.append(newdiv);
 newdiv.style.width="60%";
 newdiv.style.margin="auto"
newdiv.style.backgroundColor = "rgb(100,100,100)";


 function cdiv(){
    const ndiv = document.createElement("div");
    newdiv.append(ndiv);
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    // console.log(randomColor)
    ndiv.style.backgroundColor = randomColor;
    
    ndiv.style.width="20%";
    ndiv.style.height="100px";
    ndiv.style.display="inline-block";
    ndiv.style.margin="2%";
    return ndiv;
 }


var res=[];
 for(var i=1;i<=8;i++){
     div1=cdiv();
     res.push(div1.style.backgroundColor);
     
 }

var col=res[Math.floor(Math.random()*8) ] ;
te.textContent ="Find this color: " + col ;
console.log(col);

newdiv.addEventListener('click',(event)=>{
    // console.log(event.target)
    console.log(event.target.style.backgroundColor)
    te.textContent= "You selected Color: " +event.target.style.backgroundColor;
    if(event.target.style.backgroundColor === col){
        alert("Success");
    }
    else{
    event.target.style.display="none";
    }
})























// div1 = cdiv();
// div2= cdiv();
// div3=cdiv();
// div4=cdiv();
// div5 =cdiv();
// div6= cdiv();
// div7=cdiv();
// div8=cdiv();


// newdiv.style.width="200px";
// newdiv.style.height="50%";



// newdiv.append(newdiv1);

// newdiv1.style.backgroundColor = "blue";
// newdiv1.style.width="10%";
// newdiv1.style.height="10%";
// for(var i=1;i<8;i++){

// document.body.style.backgroundColor = "#" + randomColor;
// color.innerHTML = "#" + randomColor;
// }

// var col = ['red','green','gold','pink','orange','purple','blue','yellow'];
//  divs.classList.add('style')


// newdiv2.style.backgroundColor = "green";
// newdiv2.style.width="50px";
// newdiv2.style.height="50px";
// newdiv2.style.border="  3px solid black";


// newdiv2.addEventListener('click',e=>{
//     e.stopPropagation()
//     newdiv2.remove();
// })

// newdiv1.addEventListener('click',e=>{
//     e.stopPropagation()
//     newdiv1.remove();
// })

// newdiv.addEventListener('click',e=>{
//     e.stopPropagation()
//     newdiv.remove()
// })

