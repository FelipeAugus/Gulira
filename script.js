(function(){
    const balls = document.getElementsByClassName("ball");
    const hand = document.getElementsByClassName("hand");

    document.onmousemove = function() {
        let x = event.clientX * 100 / window.innerWidth + "%",
            y = event.clientY *100 / window.innerHeight + "%";

        for (let index = 0; index <2; index++) {
            balls[index].style.left = x;
            balls[index].style.top = y;
            balls[index].style.transform = `translate(-${x},-${y})`;
        }
        hand[0].style.left = x;
        hand[0].style.top = y;
        hand[0].style.transform = `translate(-${x},-${y})`;
    }
})();