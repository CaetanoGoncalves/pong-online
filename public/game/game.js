import {screenConfig, ballConfig, paddleConfig} from './config.js';

import { startLoop, clearScreen } from "./loop.js";
import { Paddle } from "./entities/paddle.js";
import { Ball } from "./entities/ball.js";

export const canvas = document.getElementById("main-game");
export const context = canvas.getContext("2d");

canvas.width = screenConfig.screenWidth;
canvas.height= screenConfig.screenHeight;

const leftPaddle = new Paddle(
    "green", 
    paddleConfig.left.x, 
    paddleConfig.left.y, 
    paddleConfig.width, 
    paddleConfig.height, 
    paddleConfig.speed, 
    context
);
const rightPaddle = new Paddle(
    "green", 
    paddleConfig.right.x, 
    paddleConfig.right.y, 
    paddleConfig.width, 
    paddleConfig.height, 
    paddleConfig.speed, 
    context
);
const bouncingBall = new Ball("white", ballConfig.x, ballConfig.y, ballConfig.radius, ballConfig.vr, ballConfig.maxSpeed, context);

function main(){
    update();
    draw();
}
function update() {
    bouncingBall.move(screenConfig);
    if(bouncingBall.touching_rectangle(leftPaddle)) bouncingBall.bounce(leftPaddle);
    if(bouncingBall.touching_rectangle(rightPaddle)) bouncingBall.bounce(rightPaddle);
    if(bouncingBall.x <= 0 || bouncingBall.x >= screenConfig.screenWidth) bouncingBall.reset();
}
function draw(){
    clearScreen(context);
    bouncingBall.draw();
    leftPaddle.draw();
    rightPaddle.draw();
}
startLoop(main);
