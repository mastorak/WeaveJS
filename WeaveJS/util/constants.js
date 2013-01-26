/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */

/**
 * A class to set and easily use constants in the engine
 * 
 */
function Constants(){}
	
	

	/* Moving constants */

	Constants.standing=function(){
		return 'standing';
	};
		
	Constants.moveright=function(){
		return 'moveright';
	};
	
	Constants.moveleft=function(){
		return 'moveleft';
	};
	
	Constants.moveup=function(){
		return 'moveup';
	};
	
	/* Collision constant */
	
	Constants.defaultCollision=function(){
		return 'defaultcollision';
	};

	Constants.collisionRight=function(){
		return 'collisionright';
	};
	
	Constants.collisionLeft=function(){
		return 'collisionleft';
	};
	
	Constants.collisionUp=function(){
		return 'collisionup';
	};
	
	Constants.collisionDown=function(){
		return 'collisiondown';
	};