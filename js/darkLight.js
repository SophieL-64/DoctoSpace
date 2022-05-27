const chk = document.getElementById('chk');

if(chk!=null){
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});
}