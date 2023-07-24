
// - Receive an error message when the `form` is submitted if:
// - The `input` field is empty
// - The email address is not formatted correctly

const form = document.querySelector('form');
const field = form.querySelector(".field");
const button = form.querySelector("label");
const errorMsg = document.querySelector('.error');
const errorIcon = document.querySelector('.errorIcon');

form.addEventListener('submit', (e) => {
	if (field.value == null || field.value == '' ||
		!(field.value.includes('@')) || !(field.value.includes('.com'))) {
		e.preventDefault();
		errorMsg.innerHTML = 'Please provide a valid email!';
		errorIcon.classList.remove('hidden');
	} else {
		alert('Your email has been added to our mailing list!');
	}
});
