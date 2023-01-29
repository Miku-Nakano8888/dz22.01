import URL from './script.js';

let prodCont1 = document.querySelector('.prod-cont1');
let prodCont2 = document.querySelector('.prod-cont2');

const getDatabase = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
let span = '';
let timer;
let schet = 0;
let data;
let funcPrice = async () => {
    schet = 0;
    span = '';
    let data = await getDatabase(URL);
    var today = new Date();
        // получить сегодняшнюю дату в формате `MM/DD/YYYY`
        var now = today.toLocaleDateString('en-US');
    if(!localStorage.getItem('timer')){
        localStorage.setItem('timer', 1);
        localStorage.setItem('data', now);
        console.log(now);
    for (let key in data) {
        span = '';
        if(schet < 4){
        prodCont1.insertAdjacentHTML(`beforeend`, `
        <div class="product">
            <div class="photo"><img src="${data[key]["avatar"]}"></div>
            <div class="info">
                <span class="water">Название: ${data[key]["name"]}</span><br>
                <span class="kolvo">Количество на складе: ${data[key]["amount"]}</span><br>
                <span class="price" style="text-decoration: line-through;">${data[key]["price"]}</span><br>
                <span class="price sell" style="color:red;">${(+data[key]["price"].slice(0,-1)-(+data[key]["price"].slice(0,-1)*0.25))+'$'}</span><br>
            </div>
        </div>
    `)}
    else if(schet < 8){
        prodCont2.insertAdjacentHTML(`beforeend`, `
        <div class="product">
        <div class="photo"><img src="${data[key]["avatar"]}"></div>
        <div class="info">
            <span class="water">Название: ${data[key]["name"]}</span><br>
            <span class="kolvo">Количество на складе: ${data[key]["amount"]}</span><br>
            <span class="price" style="text-decoration: line-through;">${data[key]["price"]}</span><br>
            <span class="price sell" style=" color:red;">${(+data[key]["price"].slice(0,-1)-(+data[key]["price"].slice(0,-1)*0.25))+'$'}</span><br>
        </div>
    </div>
        `)}
        schet++;
    }
    }

    // +now.slice(0,2) > +localStorage.getItem('data').slice(0,2)+3 || +now.slice(0,2) < +localStorage.getItem('data').slice(0,2)
    else if((+now.slice(2,4) > +localStorage.getItem('data').slice(2,4)+3 &&  +now.slice(0,1) == +localStorage.getItem('data').slice(0,1) || +now.slice(2,4) < +localStorage.getItem('data').slice(2,4))){
        for (let key in data) {
            span = '';
            if(schet < 4){
            prodCont1.insertAdjacentHTML(`beforeend`, `
            <div class="product">
                <div class="photo"><img src="${data[key]["avatar"]}"></div>
                <div class="info">
                    <span class="water">Название: ${data[key]["name"]}</span><br>
                    <span class="kolvo">Количество на складе: ${data[key]["amount"]}</span><br>
                    <span class="price" >${data[key]["price"]}</span><br>
                </div>
            </div>
        `)}
        else if(schet < 8){
            prodCont2.insertAdjacentHTML(`beforeend`, `
            <div class="product">
            <div class="photo"><img src="${data[key]["avatar"]}"></div>
            <div class="info">
                <span class="water">Название: ${data[key]["name"]}</span><br>
                <span class="kolvo">Количество на складе: ${data[key]["amount"]}</span><br>
                <span class="price" >${data[key]["price"]}</span><br>
            </div>
        </div>
            `)}
            schet++;
        }
    }
    else {
        for (let key in data) {
            span = '';
            if(schet < 4){
            prodCont1.insertAdjacentHTML(`beforeend`, `
            <div class="product">
                <div class="photo"><img src="${data[key]["avatar"]}"></div>
                <div class="info">
                    <span class="water">Название: ${data[key]["name"]}</span><br>
                    <span class="kolvo">Количество на складе: ${data[key]["amount"]}</span><br>
                    <span class="price" style="text-decoration: line-through;">${data[key]["price"]}</span><br>
                    <span class="price sell" style="color:red;">${(+data[key]["price"].slice(0,-1)-(+data[key]["price"].slice(0,-1)*0.25))+'$'}</span><br>
                </div>
            </div>
        `)}
        else if(schet < 8){
            prodCont2.insertAdjacentHTML(`beforeend`, `
            <div class="product">
            <div class="photo"><img src="${data[key]["avatar"]}"></div>
            <div class="info">
                <span class="water">Название: ${data[key]["name"]}</span><br>
                <span class="kolvo">Количество на складе: ${data[key]["amount"]}</span><br>
                <span class="price" style="text-decoration: line-through;">${data[key]["price"]}</span><br>
                <span class="price sell" style=" color:red;">${(+data[key]["price"].slice(0,-1)-(+data[key]["price"].slice(0,-1)*0.25))+'$'}</span><br>
            </div>
        </div>
            `)}
            schet++;
        }
    }
    console.log(+now.slice(2,4))

    timer++;
}


export default funcPrice;