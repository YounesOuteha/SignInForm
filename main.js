const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const btn = document.querySelector('.btn-2');
const myDiv = document.querySelector('.divToShow');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
 btn.addEventListener('click', () =>{
	myDiv.style.visibility = 'visible';
	setTimeout(function() {
		myDiv.style.visibility = 'hidden';
    }, 1000);
})