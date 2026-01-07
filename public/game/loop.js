let lastTime = 0;

export function startLoop(update) {
    requestAnimationFrame(frame);

    function frame(time) {
        const deltaTime = (time - lastTime) / 1000;
        lastTime = time;

        update(deltaTime);
        requestAnimationFrame(frame);
    }
}
export function clearScreen(context)
{
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
}