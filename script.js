(function(){
    const balls = document.getElementsByClassName("ball");
    
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

    const hand = document.getElementsByClassName("hand");

    hand[0].style.left = x;
    hand[0].style.top = y;
    
    hand[0].style.animation = `punch 0.6s ease 0.1s infinite alternate`;
    setTimeout(function(){hand[0].style.animation = `none`;}, 702);
    
}
