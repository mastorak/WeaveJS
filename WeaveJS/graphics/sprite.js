/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */

/**
 * Sprite class
 * 
 * @param x the sprite's x coordinates
 * @param y the sprite's y coordinates
 * @returns
 */
function Sprite (x,y){
	
	this.image;
	this.frame;
	this.frameW;
	this.frameH;
	
	this.x=x;
	this.y=y;
	this.direction=Constants.standing();
	this.srcX=0;
	this.srcY=0;
	this.animations=new Table();
	
	this.frame = 0;
	this.lastUpdateTime = 0;
	this.timeIncrement = 0;
	this.msPerFrame = 100;
	
}	
	
	/**
	 * Draw the image to the canvas 
	 */
	Sprite.prototype.draw=function(){
		
		if(this.animations.getSize()==0)
			return;
		this.calculateMovement();
		this.calculateDraw();
		
		
		weavejs.getCanvasContext().drawImage(this.image,this.srcX+(this.frame*this.frameW),this.srcY,this.frameW,this.frameH,this.x,this.y,this.frameW,this.frameH);
		
		//console.log(this.image +" "+ this.srcX*this.frame +" "+ this.srcY +" "+ this.frameW +" "+ this.frameH +" "+ this.x +" "+ this.y +" "+ this.frameW +" "+ this.frameH);
		
		
	};
	
	/**
	 * Calculate what will be draw depending on the animation and the sprite entity state
	 */
	Sprite.prototype.calculateDraw=function(){
		
		if(this.direction==Constants.standing()){		
			animation=this.animations.get(Constants.standing());
		}
		else if(this.direction==Constants.moveright()){
			animation=this.animations.get(Constants.moveright());
		}
		else if(this.direction==Constants.moveleft()){
			animation=this.animations.get(Constants.moveleft());
		}
		
		this.frameW=animation.frameW;
		this.frameH=animation.frameH;
		
		this.srcX=this.srcX + animation.offsetX+ (animation.startX * this.frameW);
		this.srcY=this.srcY + animation.offsetY+ (animation.startY * this.frameH);	
		this.image=animation.image;
		
		this.animate(animation.frames);
	
		
	};
	

	/**
	 * Calculate the next frame to show in the next draw
	 * 
	 * @param maxFrames The number of frames this animation consists of 
	 */
	Sprite.prototype.animate=function(maxFrames){
			
		    var timeSinceLastUpdate = Date.now() - this.lastUpdateTime;
		    if (this.timeIncrement > this.msPerFrame)
		    {
		    	this.timeIncrement = 0;
		    	if(this.frame<maxFrames){
		    		this.frame++;
		    	}
		    
		        if (this.frame >= maxFrames){
		        	this.frame = 0;
		        }
		    } else
		    {
		        this.timeIncrement += timeSinceLastUpdate;
		    }

		    this.lastUpdateTime = Date.now();
		
		
	};
	
	/**
	 * Method to add an animation to a sprite entity 
	 * 
	 * @param animId The identifier for the animation
	 * @param animation The animation to be added
	 */
	Sprite.prototype.addAnimation=function(animId,animation){
		this.animations.put(animId, animation);
	};
	
	/**
	 * Empty abstract method used to calculate where the sprite entity will be drawn 
	 */
	Sprite.prototype.calculateMovement=function(){
		
	};
	
	/**
	 * This method will be called when the sprite collides with another from the Entity Manager
	 * @param otherSprite The sprite with which the collision occurred
	 */
	Sprite.prototype.onCollision=function(otherSprite){
		
	};

