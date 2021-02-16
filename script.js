const balls = document.getElementsByClassName("ball");
const hand = document.getElementsByClassName("hand");
const mFlip = document.getElementsByClassName("easteregg");

let clear = null;

let flip = 0;

(function(){
    document.onmousemove = function() {
        let x = event.clientX * 100 / window.innerWidth + "%",
            y = event.clientY *100 / window.innerHeight + "%";
    
        for (let index = 0; index <2; index++) {
            balls[index].style.left = x;
            balls[index].style.top = y;
            balls[index].style.transform = `translate(-${x},-${y})`;
        }
    }
})();

function punch(){
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

function monkeyFlip(){
    flip++;
    if (flip == 6){
        mFlip[0].style.display = `block`;
        setTimeout(function(){mFlip[0].style.display = `none`;}, 10100);
    }else{
        setTimeout(function(){flip = 0;}, 1000);
    }
}
