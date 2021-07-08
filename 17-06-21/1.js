// let num=Math.floor(Math.random()*100);
// console.log(num);


const loadata = (n)=>{{
    return new Promise((resolve,reject)=>{
        console.log(n);
        var a=Math.sqrt(n);

        console.log(a);
        if(Math.floor(a) === a){
            resolve("Sucess");
        }
        else{
            reject("Failed");
        }
    })
}
}

var n = prompt("Enter number to check for square number")
let prom = loadata(n)
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

