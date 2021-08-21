function simpleClick() {
    console.log('click');
}

const btn1 = document.querySelector('#btn'),
    one = document.querySelector('.one');

btn1.style.display = 'block';

//btn1.onclick = simpleClick;

/* btn1.onclick = function(){
    document.querySelector('h1').style.color = 'red';
} */

btn1.onclick = () => document.querySelector('h1').style.color = 'red';

btn1.addEventListener('click', simpleClick);

console.log('test')

one.onclick = () => {
    one.style.backgroundColor = 'yellow';
}
