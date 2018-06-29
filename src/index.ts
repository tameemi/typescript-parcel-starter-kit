
console.log('Hell from index.ts');
//window.location.reload(true);
//let reload = true;
let text: string = '';
let num: number = 0;

function changeTitle(t: string){
    text = t;

    var getH1 = (document.getElementById('text-area'));
    if (getH1){
        getH1.innerHTML = `<h1>${t} </h1>`;
    }



}

function increment(){
        num++;
}


changeTitle('start!');

var timerTest = setInterval( () =>{
    increment();
    changeTitle(num.toString());

},1000)

function renderDiv() {
    var divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'text-area');

    var titleText = document.createElement('div');
    titleText.innerHTML = `<h1> ${text} </h1>`;
    divContainer.appendChild(titleText);
    document.body.appendChild(divContainer);
}

document.addEventListener('DOMContentLoaded', (event) =>{
    renderDiv();
    console.log('dom loaded', event);
}, false);

window.onload= () => {

    console.log('onload called');
};