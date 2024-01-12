const userNumber = document.getElementById('user-number');
const cpuNumber = document.getElementById('cpu-number');
const resultElement = document.getElementById('result');

const userRandom = Math.floor(Math.random() * 6 + 1);
console.log(userRandom);
userNumber.innerHTML = `${userRandom}`;
const cpuRandom = Math.floor(Math.random() * 6 + 1);
console.log(cpuRandom);
cpuNumber.innerHTML = `${cpuRandom}`;

if (userRandom > cpuRandom) {
    resultElement.innerHTML = `YOU WIN`;
    resultElement.classList.add('text-success');
    resultElement.classList.remove('text-danger');
} else if (cpuRandom > userRandom) {
    resultElement.innerHTML = `YOU LOSE`;
    resultElement.classList.add('text-danger');
    resultElement.classList.remove('text-success');
} else {
    resultElement.innerHTML = `TIE`;
    resultElement.classList.add('text-primary');
    resultElement.classList.remove('text-danger');
    resultElement.classList.remove('text-success');
}