<<<<<<< HEAD

=======
// fonction pour faire apparaitre / disparaitre le sous-menu
>>>>>>> 9c963054c26f9edc10a1a22b907196e966014657
function toggle() {
    let elm = document.getElementById('sousMenu');

    if(elm.className === 'navSousItemdrop_active'){
        elm.className = 'navSousItemdrop';
    } else {
        elm.className = 'navSousItemdrop_active';
    }
}



