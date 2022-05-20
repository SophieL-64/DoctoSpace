//////////Navbar///////////////////////////

// fonction toogle() pour faire apparaitre / disparaitre le sous-menu
function toggle() {
    let elm = document.getElementById('sousMenu');

    if(elm.className === 'navSousItemdrop_active'){
        elm.className = 'navSousItemdrop';
    } else {
        elm.className = 'navSousItemdrop_active';
    }
}



//////////Caroussel/////////////////////////



//////////Onglet Pathologie/////////////////////////



//////////tesmoniale/////////////////////////

// Scroll haut de page///////////////////////////////////////
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("haut").style.display = "block";
    } else {
      document.getElementById("haut").style.display = "none";
    }
  }
  
  function retourHaut() {
    window.scrollTo(0, 0);
  }