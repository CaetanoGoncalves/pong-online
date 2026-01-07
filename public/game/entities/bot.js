export function botControl(paddle, ball)
{
    const paddleCenter = paddle.y + paddle.height / 2;
    const ballPosition = ball.y;

    if (ball.vx < 0) {
        return 2;
    }

    if (ballPosition < paddleCenter - 5) {
        return 0; 
    }
    if (ballPosition > paddleCenter + 5) {
        return 1; 
    }
    return 2; 
}