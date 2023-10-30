const inputs = document.querySelectorAll('input, select, textarea');
const submit = document.querySelector(".submit");

for (let input of inputs) {
    input.addEventListener('invalid', (event) => {
        input.classList.add('error');
    }, false);

    input.addEventListener('blur', (event) => {
        input.checkValidity();
    })

}

