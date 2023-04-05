import { evaluate } from 'mathjs';
const container = document.querySelector('.container-div');
const calc_btn = document.querySelectorAll('.calc_btn button');
calc_btn.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        switch (value) {
            case 'AC':
                container.innerText = ' ';
                break;
            case '=':
                calculate(container.innerText);
                break;
            default:
                container.innerText += value;
                break;
        }
    });
});
function calculate(expression) {
    return container.innerText = evaluate(expression);
}
const img = document.createElement('img');
img.style.width = '300px';
document.body.append(img);
const imgUrl = new URL('/src/images/2344132.png', import.meta.url);
img.src = imgUrl.href;
