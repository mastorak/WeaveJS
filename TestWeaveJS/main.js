

//setup the engine params
var screen= new setupEngine(480, 320,'c');

var appLoop;


var background=new Background(screen,"day");
var actor=new Actor(screen.width/2-65/2,screen.height-128,true);

var standingAnim=new Animation("images/smurf.png",1,0,0,128,128,0,0);
var moveRightAnim=new Animation("images/smurf.png",4,0,0,128,128,0,0);
var moveLeftAnim=new Animation("images/smurf2.png",4,0,0,128,128,0,0);
actor.addAnimation(Constants.standing(),standingAnim);
actor.addAnimation(Constants.moveright(), moveRightAnim);
actor.addAnimation(Constants.moveleft(), moveLeftAnim);

//Start the main app loop
var AppLoop = function(){  
	
background.draw();
actor.draw();

appLoop = setTimeout(AppLoop, 1000 / 50);  
};




//start the app	
AppLoop();
