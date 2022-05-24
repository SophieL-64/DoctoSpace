console.log("DOCTOSPACE");

function mediaquery(x) {
  if (x.matches) {
    let article1 = document.getElementById("testimonial-1");
    let article2 = document.getElementById("testimonial-2");
    let article3 = document.getElementById("testimonial-3");

    article1.classList.toggle("actif");
    article2.classList.toggle("actif");
  } else {
    let i = 1;
    setInterval(() => {
      // console.log("test interval toutes les 3 secondes");
      permute(i);
      if (i !== 3) {
        i++;
      } else {
        i = 1;
      }
    }, 5000);

    function permute(i) {
      let article1 = document.getElementById("testimonial-1");
      let article2 = document.getElementById("testimonial-2");
      let article3 = document.getElementById("testimonial-3");

      if (i == 1) {
        article3.classList.toggle("actif");
        article1.classList.toggle("actif");
        console.log("test----", article1);
        console.log("cas: ", 1);
      }
      if (i == 2) {
        article1.classList.toggle("actif");
        article2.classList.toggle("actif");
        console.log("cas: ", 2);
      }
      if (i == 3) {
        article2.classList.toggle("actif");
        article3.classList.toggle("actif");
        console.log("cas: ", 3);
      }

      console.log(i, article1, article2, article3);
    }
  }
}

const x = window.matchMedia("(min-width:600px)");
mediaquery(x);
