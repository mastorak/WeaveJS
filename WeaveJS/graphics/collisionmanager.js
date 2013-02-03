/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 * 
 */
/**
 * CollisionManager class
 * 
 * This manager class will check on collisions depending on the set policy
 * 
 * @param policy the collision policy used
 * defaultPolicy: User and entities will be checked against the solids
 * 				  User will be checked against the entities
 *  
 */
function CollisionManager(policy){
	
	this.policy=policy;
	
	this.checkCollision=function(){
		
		if(this.policy==Constants.defaultCollision){
			checkCollisionDefault();
		}
		
	};
	
	
	/**
	 * Check for collision with the default policy
	 */
	checkCollisionDefault=function(){
		
		var user=entityManager.getUser();
		var entities=entityManager.getEntities();
		var solids=entityManager.getSolids();
		
		
		var userLeft=parseFloat(user.x);
		var userRight=parseFloat(user.x+user.frameW);
		var userTop=parseFloat(user.y);
		var userBottom=parseFloat(user.y+user.frameH);
		var isCollision=false;
		
		for(var i=0; i<entities.length; i++){
		
			var isSpriteOverlap=true;
			
			var entity=entities[i];
			
			var entityLeft=parseFloat(entity.x);
			var entityRight=parseFloat(entity.x+entity.frameW);
			var entityTop=parseFloat(entity.y);
			var entityBottom=parseFloat(entity.y+entity.frameH);
			
			//Check if the two Sprites overlap so the images are close 
			if(userLeft > entityRight || entityLeft > userRight || userTop > entityBottom || entityTop > userBottom){
				isSpriteOverlap=false;
			}

			//if they are close then do pixel-by-pixel comparison
			if(isSpriteOverlap){
			
				userData=weavejs.getOffCanvasContext().getImageData(user.x,user.y,user.frameW,user.frameH);
				entityData=weavejs.getOffCanvasContext().getImageData(entity.x,entity.y,entity.frameW,entity.frameH);
				
				isCollision=checkForPixelCollision(userData,user.x,user.y,entityData,entity.x,entity.y);
				
			}
			
			
			
		}
			console.log("Collision:"+isCollision);
		
	};
	
	/**
	 * the method take two entities and theeir coordinate information and checks for nont transparent pixel collision
	 * @param firstEntityData the data of the first entity 
	 * @param firstEntityX the x coordinates of the first entity
	 * @param firstEntityY the y coordinates of the first entity
	 * @param secondEntityData the data of the second entity 
	 * @param secondEntityX the x coordinates of the second entity
	 * @param secondEntityY the y coordinates of the second entity
	 * 
	 */
	checkForPixelCollision=function(firstEntityData,firstEntityX,firstEntityY,secondEntityData,secondEntityX,secondEntityY){
		

	    var firstEntityWidth  = firstEntityData.width;
	    var firstEntityHeight  = firstEntityData.height;
	    var secondEntityWidth = secondEntityData.width;
	    var secondEntityHeight = secondEntityData.height;

	    //we calculate the top right and bottom left corners
	    var xMin = Math.max( firstEntityX, secondEntityX );
	    var yMin = Math.max( firstEntityY, secondEntityY );
	    var xMax = Math.min( firstEntityX+firstEntityWidth, secondEntityX+secondEntityWidth );
	    var yMax = Math.min( firstEntityY+firstEntityHeight, secondEntityY+secondEntityHeight );
	    
	    
	    var firstEntityPixels  = firstEntityData.data;
	    var secondEntityPixels = secondEntityData.data;
		
	    //we iterate through the pixels of the each entity
	    for ( var i = xMin; i < xMax; i++ ) {
	        for ( var j = yMin; j < yMax; j++ ) {
	            
	        	 //we get the alpha value of each pixel we want to check
	        	 var firstEntityPixelAlpha = ((i-firstEntityX ) + (j-firstEntityY )*firstEntityWidth )*4 + 3 ;
	        	 var secondEntityPixelAlpha = ((i-secondEntityX) + (j-secondEntityY)*secondEntityWidth)*4 + 3 ;
	        	
	        	 //if the pixels the collide are not transparent then we a collision of the entities
	        	 if ( firstEntityPixels[firstEntityPixelAlpha] !== 0 && secondEntityPixels[secondEntityPixelAlpha] !== 0 ) {
	        		    return true;
	        		}
	        	
	        }
	    }

	    return false;
	    
	    
	};
	
	
};