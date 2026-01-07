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