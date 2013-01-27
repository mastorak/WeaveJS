/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */

/**
 * Actor class
 * 
 * @param x The actor's x coordinates
 * @param y The actor's y coordinates
 * @param isUser The boolean to set this actor as user-controlled or ai-controlled
 * @returns
 */
function Actor(x,y,isUser){
	
	this.x=x;
	this.y=y;
	this.isUser=isUser;
	this.controls;
	if(isUser==true){
		this.controls=new UserControls();
	}
	else{
		this.controls=new AIControls();
	}
	
	if(isUser==true){
		weavejs.getEntityManager().setUser(this);
	}
	else{
		weavejs.getEntityManager().addEntity(this);
	}
	
}

//Extend the Sprite 
Actor.prototype=new Sprite();
Actor.prototype.constructor=Actor;

/**
 * Calculate movement of the actor on the screen 
 * 
 */
Actor.prototype.calculateMovement=function(){
	
	if(this.controls.getMoveRight()==true){
		this.x+=5;		
		this.direction=Constants.moveright();
	}
	if(this.controls.getMoveLeft()==true){
		this.x-=5;
		this.direction=Constants.moveleft();
	}
	if(this.controls.getMoveUp()==true){
		this.y-=5;
		
	}
	if(this.controls.getMoveDown()==true){
		this.y+=5;
		
	}
	
	if(this.controls.getMoveRight()==false && this.controls.getMoveLeft()==false){
	//	this.x=this.getX();
		this.direction=Constants.standing();
		
	}
	
	if(this.controls.getMoveUp()==false && this.controls.getMoveDown()==false){
	//	this.y=this.getY();
		
	}
};

/**
 * Get the actor's x coordinates
 * 
 * @returns x
 */
Actor.prototype.getX=function(){
	return this.x;
};

/**
 * Get the actor's y coordinates
 * 
 * @returns y
 */
Actor.prototype.getY=function(){
	return this.y;
};

