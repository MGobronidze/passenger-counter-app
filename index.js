let count = 0;
let countEl = document.getElementById('count-el');
let saveEl =document.getElementById('save-el')

function increment(){
    count = count +1
    countEl.innerText = count;
}

function save(){
saveEl.innerHTML += count +' - ';
count = 0;
countEl.innerHTML = count;
}