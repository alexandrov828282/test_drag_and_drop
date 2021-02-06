// dragstart - срабатывает один раз относительно перетаскиваемого элемента в самом начале перемещения;
// drag      - срабатывает постоянно при перемещении у перетаскиваемого элемента;
// dragenter - возникает у назначаемого элемента в момент появления в его области перетаскиваемого элемента;
// dragleave - возникает у назначаемого элемента в момент, когда перетаскиваемый элемент покидает его пределы;
// dragover  - возникает постоянно у назначаемого элемента при перемещении перетаскиваемого элемента в его пределах
// drop      - возникает у назначаемого элемента в момент, когда перетаскиваемый элемент "оставляется” в его области;
// dragend   - срабатывает один раз относительно перетаскиваемого элемента при завершении его перемещения независимо 
//             от того, был ли элемент перемещен в итоге.

// let candyElem = document.querySelector('.candy');

// candyElem.addEventListener('dragstart', ()=>{
//         // console.log('захват произошёл');
//     }

// )

resize();

//изменение размера окна
document.addEventListener("DOMContentLoaded", () =>
{
    window.onresize = () => {
        resize();
    };
});

function resize()
{
    let elemVideo = document.getElementById('video');
    elemVideo.style.width = `${document.documentElement.clientWidth}px`;
    elemVideo.style.height = `${document.documentElement.clientHeight-4}px`;
}

//расположение omnom по центру
let elemOmnom1 = document.getElementById('omnom1');
// let witchOnmon1 = elemOmnom1.Width;
// let windowWidth = document.documentElement.clientWidth/2+elemOmnom1.Width;
let position = document.documentElement.clientWidth/2+elemOmnom1.width/2;
console.log(position);
console.log(document.documentElement.clientWidth/2);
console.log(elemOmnom1);
console.log(elemOmnom1.clientWidth);
elemOmnom1.style.left = `${position}px`;
//elemOmnom1.style.left = `100px`;

let img = new Image();
img.src = '/video/Композиция 1.webm';
img.onload = () => {
  alert(`${this.width}x${this.height}`);
}

