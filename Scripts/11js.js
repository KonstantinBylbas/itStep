const input = document.querySelector('input[type=text]');
const btns = document.querySelectorAll('.btn');
const equals = document.querySelector('.equals');
let lastBtn = '';


btns.forEach(btn => btn.addEventListener('click', () => {
    if (input.value != '' && (btn.innerText == '+' || btn.innerText == '-' || btn.innerText == '*' || btn.innerText == '/') && (lastBtn.innerText != '+' && lastBtn.innerText != '-' && lastBtn.innerText != '*' && lastBtn.innerText != '/') || (btn.innerText == '0' || btn.innerText == '1' || btn.innerText == '2' || btn.innerText == '3' || btn.innerText == '4' || btn.innerText == '5' || btn.innerText == '6' || btn.innerText == '7' || btn.innerText == '8' || btn.innerText == '9')) {
        lastBtn = btn;
        input.value += lastBtn.innerText;
    }
}));

equals.addEventListener('click', () => {
    input.value = eval(input.value);
})