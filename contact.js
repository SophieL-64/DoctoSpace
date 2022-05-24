const message =
  "Votre demande a bien été prise en compte par notre équipe.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });