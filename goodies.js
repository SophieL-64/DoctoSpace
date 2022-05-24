const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Stéthoscope",
    picture:
      "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Ecouter votre coeur battre au rythme des pulsars.",
    price: "€19.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Origami",
    picture:
      "https://images.pexels.com/photos/114977/pexels-photo-114977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Une des meilleures activités pour lutter contre les rhumatismes.",
    price: "€9.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Crayon...",
    picture:
      "https://images.pexels.com/photos/114119/pexels-photo-114119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Avec sa mine taillée dans une météorite Murchison !",
    price: "€49.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Grain",
    picture:
      "https://images.pexels.com/photos/942732/pexels-photo-942732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Un seul grain vous assurera de visualiser le bruit.",
    price: "€19.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Ampoule",
    picture:
      "https://images.pexels.com/photos/746496/pexels-photo-746496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Vous manquez d'idée ? Allumez la lampe !",
    price: "€199.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Boule Disco",
    picture:
      "https://images.pexels.com/photos/593467/pexels-photo-593467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Besoin de mettre des papillons dans vos yeux ?",
    price: "€399.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Appareil photo",
    picture:
      "https://images.pexels.com/photos/3002648/pexels-photo-3002648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Cet objet contient des fonctionnalités cachées...",
    price: "€249.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "7 pierres",
    picture:
      "https://images.pexels.com/photos/6945064/pexels-photo-6945064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "7 pierres précieuses qui ont chacune leur propriété.",
    price: "€1999.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Presse-papier",
    picture:
      "https://images.pexels.com/photos/7976210/pexels-photo-7976210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Ce presse-papier n'est pas un presse-papier...",
    price: "€109.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Crâne de Vogon",
    picture:
      "https://images.pexels.com/photos/5095880/pexels-photo-5095880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Crâne de Vogon si vous manquez d'inspiration administrative.",
    price: "€3999.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Piercings d'orange",
    picture:
      "https://images.pexels.com/photos/6156961/pexels-photo-6156961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Une orange, un percing... mais pourquoi ?",
    price: "€19.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "4 savons",
    picture:
      "https://images.pexels.com/photos/6621468/pexels-photo-6621468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Savon 100% naturel à base de C21H3005.",
    price: "€99.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "3 tubes à essai",
    picture:
      "https://images.pexels.com/photos/6621449/pexels-photo-6621449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Ces cristaux gommeront vos furoncles.",
    price: "€99.99",
    shipp: "+ €100 Frais de transport",
  },
  {
    name: "Serviette Astrostop",
    picture:
      "https://images.pexels.com/photos/3609985/pexels-photo-3609985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    info: "Une serviette pour voyager à bord du vaisseau Coeur-en-Or.",
    price: "€6459.99",
    shipp: "+ €100 Frais de transport",
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
  cardButton.innerHTML = "Ajouter au panier";
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
