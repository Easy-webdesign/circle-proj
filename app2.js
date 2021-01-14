const cursor = document.getElementById('cursor');
const container = document.querySelector('.circle');



// console.log(yRmin);

// window.addEventListener('mousemove', e => {
//     let x = e.pageX;
//     let y = e.pageY;

    

//     // let s = 2 * Math.PI / 180;
//     // let r = e.pageX * Math.sin(s);

//     if(e.pageX < l.oL + l.curH /2 - l.bW) x = xRmin
//     if(e.pageX > l.oL + l.cH - l.curH /2 - l.bW) x = xRmax

//     if(e.pageY < l.oT + l.curH /2 + l.bW) y = yRmin
//     if(e.pageY > l.oT + l.cH - l.curH /2 - l.bW) y = yRmax
//     // if((window.innerWidth / 2 - e.pageX) + yRmin > yRmax || e.pageY > yRmax) y = yRmax



//     cursor.style.top = y + 'px';
//     cursor.style.left = x + 'px';

//     // console.log(x, (y * Math.sin(2 * Math.PI / 180))*2,  x * Math.sin(2 * Math.PI / 180) * 4);
//     // console.log(x, cursor.style.top, cursor.style.left);
// })

// const canvas = document.getElementById('ci');
// const ctx = canvas.getContext('2d');
const curAngle = 0;
const radius = 300;
const baseX = window.innerWidth / 2;
const baseY = window.innerHeight / 2;

// const l = {
//     cW: canvas.width,
//     cH: canvas.height,
//     oT: canvas.offsetTop,
//     oL: canvas.offsetLeft,
//     bW: 4,
//     curH: 75
// }
const l = {
    cW: container.innerWidth,
    cH: container.innerHeight,
    oT: container.offsetTop,
    oL: container.offsetLeft,
    bW: 4,
    curH: 75
}

// console.log(l.oL);

let xRmin = l.oL + l.curH /2 - l.bW
let xRmax = l.oL + l.cW - l.curH /2 + l.bW

let yRmin = l.oT + l.curH /2 + l.bW
let yRmax = l.oT + l.cW - l.curH /2 + l.bW

console.log(xRmin);
// console.dir(canvas);

window.addEventListener('mousemove', e => {
    let x = e.pageX;
    let y = e.pageY;
    
    let xO = e.pageX - window.innerWidth / 2
    let yO =  e.pageY - window.innerHeight/ 2 
    

    let xOrd = yO < 0 ? Math.sqrt(-yO) : -Math.sqrt(yO);
    let yOrd = xO < 0 ? -Math.sqrt(-xO) : Math.sqrt(xO);

    let AB = Math.sqrt(((0 - xO)**2) + (0 - yO)**2)
    let BC = Math.sqrt(((0 - 300)**2) + (0 - 300)**2)


    if(Math.round(Math.sqrt(((0 - xO - 8)**2) + (0 - yO + 8)**2)) <= 262){
        x = xO + window.innerWidth / 2;
        y = yO + window.innerHeight/ 2 ;
        
        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
    }

})