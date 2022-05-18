console.log("DOCTOSPACE")


let i=1;
setInterval(()=>{
    console.log("test interval toutes les 3 secondes");
    permute(i)
    if(i!==3){
       i++; 
    }
    else{
        i=1;
    }
}, 3000)



function permute(i){
    let article1=document.getElementById("testimonial-1");
 let article2=document.getElementById("testimonial-2");
 let article3=document.getElementById("testimonial-3");

 
    if (i==1){
    article1.className="actif"
    article2.className="inactif"
    article3.className="inactif"
        console.log("cas: ",1)
    }
      if (i==2){
    article1.className="inactif"
    article2.className="actif"
    article3.className="inactif"
            console.log("cas: ",2)

    }
      if (i==3){
    article1.className="inactif"
    article2.className="inactif"
    article3.className="actif"
            console.log("cas: ",3)
    }

    console.log(i,article1,article2,article3)
}


// console.log(article1,article2,article3)


// peu pas sur interfacfe HTMLelement deplacer l'odre./.

// let articles= document.querySelectorAll('#testimonials-articles')[0].children;

// shiftRight(articles);


//modifier l'odre du dom
// articles.unshift();





function shiftRight(arr){
    arr.unshift(arr[arr.length]);
    arr.pop();
}


//     articles.shift(articles[articles.length])
//  console.log(articles);




//  function perm(xs) {
//   let ret = [];

//   for (let i = 0; i < xs.length; i = i + 1) {
//     let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

//     if(!rest.length) {
//       ret.push([xs[i]])
//     } else {
//       for(let j = 0; j < rest.length; j = j + 1) {
//         ret.push([xs[i]].concat(rest[j]))
//       }
//     }
//   }
//   return ret;
// }

