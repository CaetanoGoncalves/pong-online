export const screenConfig = {
    screenHeight: window.innerHeight*0.7,
    screenWidth: window.innerWidth*0.7,
    screenCenter: {
        x: window.innerWidth*0.7/2, 
        y: window.innerHeight*0.7/2
    }
};
export const ballConfig = {
    x: screenConfig.screenCenter.x, 
    y: screenConfig.screenCenter.y, 
    radius: screenConfig.screenWidth/70,
    vr: screenConfig.screenWidth/150, 
    maxSpeed:screenConfig.screenWidth/50
};
const paddleGap = {x:screenConfig.screenWidth/20, y:screenConfig.screenHeight/20};
export const paddleConfig = {
    width:screenConfig.screenWidth/50, 
    height:screenConfig.screenHeight/4, 
    speed:screenConfig.screenHeight/100,  
    right: {
        x:screenConfig.screenWidth - paddleGap.x,
        y: paddleGap.y
    },
    left:{
        x:paddleGap.x,
        y:paddleGap.y
    }
};