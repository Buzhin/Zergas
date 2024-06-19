
const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {

    event.preventDefault();


    alert('You have successfully registered');


    form.submit();
});
