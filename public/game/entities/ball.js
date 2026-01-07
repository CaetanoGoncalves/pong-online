export class Ball
{
    constructor(color, x, y, radius, vr, maxSpeed, velocity, context)
    {
        this.color = color;
        this.x = x;
        this.y = y;
        
        this.spawnX = x;
        this.spawnY = y;
        this.radius = radius;
        this.velocity = velocity;
        this.baseSpeed = vr;
        this.speed = vr;
        this.maxSpeed = maxSpeed;
        const angle = (Math.random() * 2 - 1) * Math.PI / 4;
        this.vx = this.speed * Math.cos(angle);
        this.vy = this.speed * Math.sin(angle);

        this.context = context;
    }
    reset()
    {
        this.x = this.spawnX;
        this.y = this.spawnY;
        this.speed = this.baseSpeed;

        const angle = (Math.random() * 2 - 1) * Math.PI / 4;
        this.vx = this.speed * Math.cos(angle);
        this.vy = this.speed * Math.sin(angle);
        return this;
    }
    draw()
    {
        this.context.beginPath(); 
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color; 
        this.context.fill(); 
        this.context.closePath();
        return this; 
    }

    move(screenConfig)
    {
        if (this.y - this.radius <= 0 || this.y + this.radius >= screenConfig.screenHeight)
            {this.vy *= -1;}
        this.x += this.vx;
        this.y += this.vy;
        return this;
    }

    touching_rectangle(rectangle)
    {
        return (
            this.x - this.radius <= rectangle.x + rectangle.width &&
            this.x + this.radius >= rectangle.x &&
            this.y + this.radius >= rectangle.y &&
            this.y - this.radius <= rectangle.y + rectangle.height
        );
    }

    bounce(rectangle)
    {
        let collidePoint = (this.y - (rectangle.y + rectangle.height / 2));
        
        collidePoint = collidePoint / (rectangle.height / 2);
        if(collidePoint > 1) {collidePoint = 1;}
        if(collidePoint < -1) {collidePoint = -1;}
        const angleRad = (Math.PI / 3) * collidePoint;
        const direction = (this.vx < 0) ? 1 : -1;
        this.speed += this.velocity;
        this.speed = Math.min(this.speed, this.maxSpeed);
        this.vx = direction * this.speed * Math.cos(angleRad);
        this.vy = this.speed * Math.sin(angleRad);
    
    }
}