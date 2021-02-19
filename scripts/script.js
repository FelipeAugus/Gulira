const balls = document.getElementsByClassName("ball");
const hand = document.getElementsByClassName("hand");
const img = document.getElementsByClassName("easteregg");

let clear = null;
let click = 0;

let quadAnt = 0; // quadrante
let quad = 0;
let loop = 0;
let Spin = 0;
let sent = true;

(function(){
    document.onmousemove = function() {
        let x = event.clientX * 100 / window.innerWidth,
            y = event.clientY *100 / window.innerHeight;
    
        for (let index = 0; index <2; index++) {
            balls[index].style.left = x+'%';
            balls[index].style.top = y+'%';
            balls[index].style.transform = `translate(-${x}%,-${y}%)`;
        }

        if(x<50 && y<50){
            quad = 0;
        }else if(x>50 && y<50){
            quad = 1;
        }else if(x>50 && y>50){
            quad = 2;
        }else{
            quad = 3;
        }
        if(quad != quadAnt){spin();}
    }
})();

function punch(){
    if(click == 2){
        let x = event.clientX * 100 / window.innerWidth + "%",
            y = event.clientY *100 / window.innerHeight + "%";

        hand[0].style.left = x;
        hand[0].style.top = y;
        
        hand[0].style.animation = `punch 0.6s ease 0.1s infinite alternate`;
        if(clear == null){
            clear = setTimeout(function(){hand[0].style.animation = `none`;}, 702);
        }else{
            clearTimeout(clear);
            clear = setTimeout(function(){hand[0].style.animation = `none`;}, 702);
        }
    }
}

function monkeyFlip(){
    click++;
    if (click == 6){
        gif('./arquivos/mnkflp.gif', 10100)
    }else{
        setTimeout(function(){click = 0;}, 1000);
    }
}

function spin(){

    if(((quad == quadAnt+1) || (quad == 0 && quadAnt == 3)) && (sent == true)){
        loop +=1;
    }else if(((quad == quadAnt-1) || (quad == 3 && quadAnt == 0)) && (sent == false)){
        loop +=1;
    }else{
        sent = !sent;
        loop = 0;
    }

    if(loop == 4){
        loop = 0;
        Spin +=1;
    }
    if(Spin == 4){
        Spin = 0;
        gif('./arquivos/spinning.gif', 4000)
    }

    quadAnt = quad;
}

function gif(src, time){
    img[0].getElementsByTagName('img')[0].src = src;
    img[0].style.display = `block`;
    setTimeout(function(){img[0].style.display = `none`;}, time);
}
