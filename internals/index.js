var sol = document.getElementById("sub-division")
var nam = document.getElementById("name");
var reg = document.getElementById("reg");
var des = document.getElementById("des");


var ar=[];
const sub=()=>{
    var data={
        category:sol.value,
        name:nam.value,
        region:reg.value,
        des:des.value
    }
    console.log(data);
    ar.push(data);
    console.log(ar);

    sol.value="";
    nam.value="";
    reg.value="";
    des.value=""
}

const show=()=>{
    var search=document.getElementById("search").value;

    var output="";
    var res=ar;
    // console.log(res)
    var ans= res.filter(ele=> ele.category === search )
    console.log(ans);
    ans.forEach(ele=>{
        output+=`<h3> Category:${ele.category}</h3><p>Name :${ele.name}</p><p>Region :${ele.region}</p><p>Desc :${ele.des}</p>`
    })

    document.getElementById("out").innerHTML = output;
}