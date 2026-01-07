import { screenConfig, ballConfig, paddleConfig } from "./config.js";

import { startLoop, clearScreen } from "./loop.js";
import { paddleState } from "./input.js";

import { Paddle } from "./entities/paddle.js";
import { Ball } from "./entities/ball.js";


export const canvas = document.getElementById("main-game");
export const context = canvas.getContext("2d");

canvas.width = screenConfig.screenWidth;
canvas.height = screenConfig.screenHeight;

const leftPaddle = new Paddle(
    "white",
    paddleConfig.left.x,
    paddleConfig.left.y,
    paddleConfig.width,
    paddleConfig.height,
    paddleConfig.speed,
    context
);
const rightPaddle = new Paddle(
    "white",
    paddleConfig.right.x,
    paddleConfig.right.y,
    paddleConfig.width,
    paddleConfig.height,
    paddleConfig.speed,
    context
);
const bouncingBall = new Ball(
    "white", 
    ballConfig.x, 
    ballConfig.y, 
    ballConfig.radius, 
    ballConfig.vr, 
    ballConfig.maxSpeed,
    ballConfig.velocity, 
    context
);

let playerPoints = 0;
let botPoints = 0;
function main() {
    update();
    draw();
}
function update() {
    bouncingBall.move(screenConfig);
    if (bouncingBall.touching_rectangle(leftPaddle)) {bouncingBall.bounce(leftPaddle);}
    if (bouncingBall.touching_rectangle(rightPaddle)) {bouncingBall.bounce(rightPaddle);}

    if (bouncingBall.x <= 0)
    {
        botPoints+=1;
        bouncingBall.reset();
        return;
    }
    if(bouncingBall.x >= screenConfig.screenWidth)
    {
        playerPoints+=1;
        bouncingBall.reset();
        return;
    }

    if(paddleState.left === 0 && leftPaddle.y > 0)
    {
        leftPaddle.up_position();
    };
    if(paddleState.left === 1 && leftPaddle.y + leftPaddle.height < screenConfig.screenHeight)
    {
        leftPaddle.down_position();
    };
    paddleState.right = botControl(rightPaddle, bouncingBall);
    if(paddleState.right === 0 && rightPaddle.y > 0)
    {
        rightPaddle.up_position();
    }
    if(paddleState.right === 1 && rightPaddle.y + rightPaddle.height < screenConfig.screenHeight)
    {
        rightPaddle.down_position();
    }
}
function draw() {
    clearScreen(context);
    drawScore(playerPoints, botPoints);
    bouncingBall.draw();
    leftPaddle.draw();
    rightPaddle.draw();
}
function botControl(paddle, ball)
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
function drawScore(player, bot)
{
    context.font = "40px Arial"; 
    context.fillStyle = "rgba(255, 255, 255, 0.5)"; 
    context.fillText(String(player), screenConfig.playerPoint.x, screenConfig.playerPoint.y);
    context.fillText(String(bot), screenConfig.botPoint.x, screenConfig.botPoint.y);
    context.beginPath();
    context.moveTo(screenConfig.screenCenter.x, 0);
    context.lineTo(screenConfig.screenCenter.x, screenConfig.screenHeight);
    context.strokeStyle = "white";
    context.stroke();
}
startLoop(main);
