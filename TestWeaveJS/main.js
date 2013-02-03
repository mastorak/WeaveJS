

//create engine and its parameters 
new WeaveJS(480, 320,'c');
var gameLoop;


//add entities
var background=new Background("day");
var actor=new Actor(weavejs.getScreenWidth()/2-65/2,weavejs.getScreenHeight()-128,true);

var standingAnim=new Animation("images/smurf.png",1,0,0,128,128,0,0);
var moveRightAnim=new Animation("images/smurf.png",4,0,0,128,128,0,0);
var moveLeftAnim=new Animation("images/smurf2.png",4,0,0,128,128,0,0);
actor.addAnimation(Constants.standing(),standingAnim);
actor.addAnimation(Constants.moveright(), moveRightAnim);
actor.addAnimation(Constants.moveleft(), moveLeftAnim);


var actor2=new Actor(weavejs.getScreenWidth()-100,weavejs.getScreenHeight()-128,false);
actor2.addAnimation(Constants.standing(),standingAnim);

//Start the main game loop
var startGameLoop = function(){

	weavejs.getEntityManager().drawEntities();
	weavejs.getCollisionManager().checkCollision();

	gameLoop = setTimeout(startGameLoop, 1000 / 50);
};


startGameLoop();