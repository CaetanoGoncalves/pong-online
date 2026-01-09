export const screenConfig = {
    screenHeight: window.innerHeight*0.7,
    screenWidth: window.innerWidth*0.7,
    screenCenter: {
        x: window.innerWidth*0.7/2, 
        y: window.innerHeight*0.7/2
    },
};
screenConfig.playerPoint = {
    x: screenConfig.screenCenter.x/2,
    y: screenConfig.screenCenter.y
};
screenConfig.botPoint = {
    x:screenConfig.playerPoint.x + screenConfig.screenWidth/2,
    y:screenConfig.playerPoint.y,
};
export const ballConfig = {
    x: screenConfig.screenCenter.x, 
    y: screenConfig.screenCenter.y, 
    radius: screenConfig.screenWidth/70,
    vr: screenConfig.screenWidth/150, 
    maxSpeed:screenConfig.screenWidth/50,
    velocity:screenConfig.screenWidth/300
};
const paddleGap = { x:screenConfig.screenWidth/20, y:screenConfig.screenHeight/20 };
export const paddleConfig = {
    width:screenConfig.screenWidth/50, 
    height:screenConfig.screenHeight/4, 
    speed:screenConfig.screenHeight/60,  
    right: {
        x:screenConfig.screenWidth - paddleGap.x,
        y: paddleGap.y
    },
    left:{
        x:paddleGap.x,
        y:paddleGap.y
    }
};
