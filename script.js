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