// function toggle() {
//   let elm = document.getElementById("SousMenu").classList.toggle("destination");
//   }
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.navSousItemdrop')) {
//       var dropdowns = document.getElementsByClassName("navSousItemdrop");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('destination')) {
//           openDropdown.classList.remove('destination');
//         }
//       }
//     }
//   }


function toggle() {
    let elm = document.getElementById('sousMenu');

    if(elm.className === 'navSousItemdrop_active'){
        elm.className = 'navSousItemdrop';
    } else {
        elm.className = 'navSousItemdrop_active';
    }

}

// function togglePage() {
//     let elm = document.getElementById('sousMenu');

//     if(elm.className === 'navSousItemdrop'){
//         elm.className = 'navSousItemdrop_active';
//     }
// }

window.onscroll = function() {stickyNav()};
const navbar = document.getElementByClassId("nav");

const sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}