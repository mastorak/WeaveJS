/*
* WeaveJS
* @author Konstantinos Mastorakis
*/



//TODO incorporate game loop functionality in the weavejs object considering about how developer would add extra functionality or possible sequence of events in the loop
 

//include libraries
document.write('<script type="text/javascript" src="../WeaveJS/util/includes.js"></script>');



var weavejs;


function WeaveJS(width,height,element){

	weavejs=this;
	
	//get the canvas element and set the context
	c = document.getElementById(element),
	ctx = c.getContext('2d');
	
	//set the screen params
	c.width = width;
	c.height = height;
	
	
	//create and off screen canvas for checks and transformations
	offCanvas= document.createElement("canvas");
	offCanvas.width = width;
	offCanvas.height = height;
    offCanvasContext=offCanvas.getContext('2d');
    //offCanvasContext.globalAlpha = 0.1;
	
   
    
    
	entityManager=new EntityManager();
	collisionManager= new CollisionManager(Constants.defaultCollision);
	
	
	
	
	/**
	 * Get the Entity Manager
	 */
	this.getEntityManager=function(){
		
		return entityManager;
	};
	
	/**
	 * Get the Collision Manager
	 */
	this.getCollisionManager=function(){
		
		return collisionManager;
	};
	
	
	/**
	 * Get the screen width
	 */
	this.getScreenWidth=function(){
		
		return width;
	};
	
	/**
	 * Get the screen height
	 */
	this.getScreenHeight=function(){
		
		return height;
	};
	
	/**
	 * Get the canvas 
	 */
	this.getCanvas=function(){
		return c;
	};
	
	/**
	 * Get the canvas context
	 */
	this.getCanvasContext=function(){
		return ctx;
	};


	/**
	 * get the off screen canvas
	 */
	this.getOffCanvas=function(){
		return offCanvas;
	};
	
	/**
	 * Get the off screen canvas context
	 */
	this.getOffCanvasContext=function(){
		return offCanvasContext;
	};
	

};






