const states = {
    "up":0,
    "down":1,
    "stop":2
};
export const paddleState = {
    bot:false,
    left: states.stop,
    right: states.up
};
document.addEventListener("keydown", (e) => {
    if(e.key === "w")
    {
        paddleState.left = states.up;
    }
    if(e.key === "s")
    {
        paddleState.left = states.down;
    }
    if(e.key ==="ArrowUp" && paddleState.bot === false)
    {
        paddleState.right = states.up;
    }
    if(e.key ==="ArrowDown" && paddleState.bot === false)
    {
        paddleState.right = states.down;
    }
});
document.addEventListener("keyup", (e) => {
    if(e.key === "w" || e.key === "s")
    {
        paddleState.left = states.stop;
    }
    if((e.key ==="ArrowUp" || e.key ==="ArrowDown")&& paddleState.bot === false)
    {
        paddleState.right = states.stop;
    }
    
});

let leftTouchY = null;
let rightTouchY = null;

document.addEventListener("pointerdown", (e) => {
    if (e.clientX < window.innerWidth / 2) {
        leftTouchY = e.clientY;
    } else {
        rightTouchY = e.clientY;
    }
});

document.addEventListener("pointermove", (e) => {
    if (leftTouchY !== null && e.clientX < window.innerWidth / 2) {
        paddleState.left = e.clientY < leftTouchY ? states.up : states.down;
        leftTouchY = e.clientY;
    }

    if (!paddleState.bot && rightTouchY !== null && e.clientX >= window.innerWidth / 2) {
        paddleState.right = e.clientY < rightTouchY ? states.up : states.down;
        rightTouchY = e.clientY;
    }
});
document.addEventListener("pointerup", () => {
    paddleState.left = states.stop;
    paddleState.right = states.stop;
    leftTouchY = null;
    rightTouchY = null;
});