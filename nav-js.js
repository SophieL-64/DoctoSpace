// function toggle() {
//     document.getElementsById("sous__menu").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.nav__sous__itemdrop')) {
//       var dropdowns = document.getElementsByClassName("nav__sous__itemdrop");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }


function toggle() {
    let elm = document.getElementById('sousMenu');

    if(elm.className === 'navSousItemdrop__active'){
        elm.className = 'navSousItemdrop';
    } else {
        elm.className = 'navSousItemdrop__active';
    }

}