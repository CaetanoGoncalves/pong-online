export class Paddle {
    constructor(color, x, y, width, height, speed, context)
    {
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.context = context;    
    }
    draw()
    {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        return this;
    }
    up_position()
    {
        this.y+=this.speed;
        return this;
    }
    down_position()
    {
        this.y -= this.speed;
        return this;
    }
}