
export default function generateRandomArray(){
    let arr = [];
    for(let i=0; i<60; i++){
        arr.push(Math.ceil(Math.random()*15));
    }
    return arr;
}