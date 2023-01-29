import funcPrice from './getdata.mjs';


const URL = 'http://localhost:3000/PRODUCTS'
let prodCont1 = document.querySelector('.prod-cont1');
let prodCont2 = document.querySelector('.prod-cont2');
const getDatabase = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
let span = '';

let schet = 0;
let data;
let func = async () => {
    schet = 0;
    span = '';
    data = await getDatabase(URL);

    funcPrice();
    return data;
}

func()


export default URL;