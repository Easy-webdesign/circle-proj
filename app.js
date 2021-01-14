const cursor = document.getElementById('cursor');
const container = document.querySelector('.circle');

const l = {
    cW: container.innerWidth,
    cH: container.innerHeight,
    oT: container.offsetTop,
    oL: container.offsetLeft,
    bW: 4,
    curH: 75
}


window.addEventListener('mousemove', e => {
    let x = e.pageX;
    let y = e.pageY;
    
    let xO = e.pageX - window.innerWidth / 2
    let yO =  e.pageY - window.innerHeight/ 2 

    let AB = Math.sqrt(((0 - xO - 8)**2) + (0 - yO + 8)**2)

    if(Math.round(AB) <= 262){
        x = xO + window.innerWidth / 2;
        y = yO + window.innerHeight/ 2 ;
        
        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';
    }
})