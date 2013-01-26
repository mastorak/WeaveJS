/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */

/**
 * User controls
 * @returns
 */
function UserControls(){
	
	 var moveRight=false;
	 var moveLeft=false;
	 var moveUp=false;
	 var moveDown=false;

	
	document.addEventListener('keydown', this.keyDown, false);
	document.addEventListener('keyup', this.keyUp, false);
}

	/**
	 * Get the state of the actor
	 * 
	 * @returns
	 */
	UserControls.prototype.getMoveRight=function(){
		return UserControls.moveRight;
	};

	/**
	 * Get the state of the actor
	 * 
	 * @returns
	 */
	UserControls.prototype.getMoveLeft=function(){
		return UserControls.moveLeft;
	};
	
	/**
	 * Get the state of the actor
	 * 
	 * @returns
	 */
	UserControls.prototype.getMoveUp=function(){
		return UserControls.moveUp;
	};
	
	/**
	 * Get the state of the actor
	 * 
	 * @returns
	 */
	UserControls.prototype.getMoveDown=function(){
		return UserControls.moveDown;
	};

	/**
	 * Set the control state according to the keydown listener
	 * 
	 * @param e The keydown event
	 */
	UserControls.prototype.keyDown=function(e) {

	  //Movement checks
		
	  if (e.keyCode == 39){
		  UserControls.moveRight = true;
	  }
	  
	  if (e.keyCode == 37){
		  UserControls.moveLeft = true;
	  }
	  
	  if (e.keyCode == 38){
		  UserControls.moveUp = true;
	  }
	  
	  if (e.keyCode == 40){
		  UserControls.moveDown = true;
	  }
	  
	  
	  //utility devel checks
	  if(e.keyCode ==69){
		  console.log("User:"+entityManager.hasUser() +" Entities:"+entityManager.getEntitiesSize()+" Solids:"+entityManager.getSolidsSize());
	  }
	  
	};

	/**
	 * Set the control state according to the keyup listener
	 * 
	 * @param e The keyup event
	 */
	UserControls.prototype.keyUp=function(e) {
	  if (e.keyCode == 39){
		  UserControls.moveRight = false;
	  }
	  if (e.keyCode == 37){
		  UserControls.moveLeft = false;
	  }
	  if (e.keyCode == 38){
		  UserControls.moveUp = false;
	  }
	  if (e.keyCode == 40){
		  UserControls.moveDown = false;
	  }

};
