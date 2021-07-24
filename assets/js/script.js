// Error Log
function validation() {
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let icon = document.getElementById('alert__icon');
    let passSlide = document.getElementById('pass-slide');
    let pattern = /^[^ ]+\.[a-z]{2,3}$/;


    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
        // text.style.color = '#00ff00';
        passSlide.style.transform = 'translateX(0px)';
    } else{
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = 'Please provide a valid email';
        passSlide.style.transform = 'translateX(37px)';

    }
}