
const articleActive = Element.getElementsByClassName(.article), i;

for (let i = 0; i < articleActive.length, i++) {
  articleActive[i+1].style.display = 'none';
  articleActive[i+2].style.display = 'none';
}

// setInterval(changeImage, 3000);
