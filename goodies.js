const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Stétoscope",
    picture: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Listen to your heart as it goes to the rhythm of the pulsars.",
    price: "$19.99",
    shipp: "+ $100 Shipping costs"

  },
  {
    name: "Origami",
    picture: "https://images.pexels.com/photos/114977/pexels-photo-114977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "One of the best activities to fight against rheumatism",
    price: "$9.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Pencil...",
    picture: "https://images.pexels.com/photos/114119/pexels-photo-114119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "With its lead sharpened in a Murchison Meteorite!",
    price: "$49.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Bean",
    picture: "https://images.pexels.com/photos/942732/pexels-photo-942732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "One of these coffee beans will ensure that you see the noise.",
    price: "$19.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Lightbulb",
    picture: "https://images.pexels.com/photos/746496/pexels-photo-746496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "You lack of ideas? screw it here!...or there!",
    price: "$199.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Disco Ball",
    picture: "https://images.pexels.com/photos/593467/pexels-photo-593467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Need to get butterflies in your eyes?",
    price: "$399.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Camera",
    picture: "https://images.pexels.com/photos/3002648/pexels-photo-3002648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "This object includes other hidden features...",
    price: "$249.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "7 stones",
    picture: "https://images.pexels.com/photos/6945064/pexels-photo-6945064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "7 stones that each have their own property.",
    price: "$1999.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Paper press",
    picture: "https://images.pexels.com/photos/7976210/pexels-photo-7976210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "This paperweight is not a paperweight...",
    price: "$109.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Vogon Skull",
    picture: "https://images.pexels.com/photos/5095880/pexels-photo-5095880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Vogon skull if you lack administrative inspiration.",
    price: "$3999.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Orange piercings",
    picture: "https://images.pexels.com/photos/6156961/pexels-photo-6156961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "An orange, 1 piercing... why do it ?",
    price: "$19.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "4 soaps",
    picture: "https://images.pexels.com/photos/6621468/pexels-photo-6621468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "All-natural soap with a C21H30O5 base.",
    price: "$99.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "3 tubes",
    picture: "https://images.pexels.com/photos/6621449/pexels-photo-6621449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "These tubes contain crystals to scrub your boils.",
    price: "$99.99",
    shipp: "+ $100 Shipping costs"
  },
  {
    name: "Astrostop towel",
    picture: "https://images.pexels.com/photos/3609985/pexels-photo-3609985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "A towel that makes you travel aboard the Heart-in-Gold ship.",
    price: "$6459.99",
    shipp: "+ $100 Shipping costs"
  },
];

function createCard(title, info, imageUrl, price, shipp) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  // Step1: Create the cardBody div, add the class card-body and add it to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Step2: Create the cardTitle h2, add the class card-title,
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  // set the text inside the tag to the "title" parameter of this function
  cardTitle.innerHTML = `${title}`;
  // and add it to the cardBody
  cardBody.appendChild(cardTitle);

  const cardInfo = document.createElement("p");
  cardInfo.classList.add("card-info");
  cardInfo.innerHTML = `${info}`;
  cardBody.appendChild(cardInfo);

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.innerHTML = `${price}`;
  cardBody.appendChild(cardPrice);

  const cardShipp = document.createElement("p");
  cardShipp.classList.add("card-shipp");
  cardShipp.innerHTML = `${shipp}`;
  cardBody.appendChild(cardShipp);

  // Step3: Create the cardButton button, add the class card-button,
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  // set the text inside the tag to be "Adopt Now"
  cardButton.innerHTML = "Add to Cart";
  // and add it to the cardBody
  cardBody.appendChild(cardButton);
}

// /* Step 4: Create a for loop, for each element of the array,
//  call the function createCard with the corresponding parameter */

animalsToAdopt.forEach((obj) => {
  createCard(obj.name, obj.info, obj.picture, obj.price, obj.shipp);
});

// Merci les Wilders////////////////////////////
// for (let i = 0; i < animalsToAdopt.length; i++) {
//   createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
// }

// for (let i of animalsToAdopt) {
//   createCard(i.name, i.picture);
// }
