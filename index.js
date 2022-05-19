console.log("DOCTOSPACE");

 //car l'element affichge deja l'article 1 on veut commencer le 2 ensuite dans la boucle
 let widthCriteraMobile=400;
let height = document.body.clientHeight;
let width = document.body.clientWidth;

let article1 = document.getElementById("testimonial-1");
let article2 = document.getElementById("testimonial-2");
let article3 = document.getElementById("testimonial-3");


article1.classList.remove("inactif");
article2.classList.remove("inactif");
article3.classList.remove("inactif");
article1.classList.add("actif");
article2.classList.add("actif");
article3.classList.add("actif");


//version mobile first
if (width<=widthCriteraMobile){
  let i = 2;
  article1.classList.add("actif");
  article2.classList.add("inactif");
  article3.classList.add("inactif");
setInterval(() => {
  console.log("test interval toutes les 3 secondes");
  permute(i);
  if (i !== 3) {
    i++;
  } else {
    i = 1;
  }
}, 3000);

}

 

function permute(i) {
  /**supression des classes active et inactive*/
  article1.classList.remove("actif");
  article2.classList.remove("actif");
  article3.classList.remove("actif");
  article1.classList.remove("inactif");
  article2.classList.remove("inactif");
  article3.classList.remove("inactif");


  if (i == 1) {
    article1.classList.add("actif");
    article2.classList.add("inactif");
    article3.classList.add("inactif");
  }
  if (i == 2) {
    article1.classList.add("inactif");
    article2.classList.add("actif");
    article3.classList.add("inactif");
    console.log("cas: ", 2);
  }
  if (i == 3) {
    article1.classList.add("inactif");
    article2.classList.add("inactif");
    article3.classList.add("actif");
    console.log("cas: ", 3);
  }

  console.log(i, article1, article2, article3);

}