/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */

/**
 * EntityManager class
 * 
 * A class to store and manage entities.
 * There are three types: the user, the other entities and the solid entities.
 * The idea behind separation is to improve the speed upon we check in the lists of entities for collisions or other events.
 * The solids would be part of the level/world.
 * The other entities would be primarily ai controlled characters or projectiles which in most occasions will have no clipping among each other.
 * In most occasions the user and the other entities will be checked against the solids and the user against the other entities.  
 * 
 */
function EntityManager(){
	
	this.length=0;
	this.user=null;
	this.backgournd=null;
	this.entities=new Array();
	this.solids=new Array();
	

	
	/**
	 * Set the user
	 * @param user The user
	 */
	this.setUser=function(user){
		
		this.user=user;
	};
	
	/**
	 * Get the user
	 */
	this.getUser=function(){
		
		return this.user;
	};
	
	/**
	 * Delete the user from the EntityManager
	 */
	this.clearUser=function(){
		
		this.user=null;		
	};
	
	/**
	 * Check if a user has been set
	 */
	this.hasUser=function(){
		
		if(this.user!=null){
			return true;
		}	
		else{
			return false;
		}
	};
	
	/**
	 * Set the screen background
	 * @param background The background we want to set
	 */
	this.setBackground=function(background){
		
		this.background=background;
	};
	
	/**
	 * Get the background
	 */
	this.getBackground=function(){
		
		return this.background;
	};
	
	/**
	 * Delete the background from the entity manager
	 */
	this.clearBackground=function(){
		
		this.background=null;
	};
	
	/**
	 * Add a graphics entity to the list
	 * @param entity the entity we want to add to the manager
	 */
	this.addEntity=function(entity){
		
		this.entities.push(entity);
	};
	
	/**
	 * Get The list of entities
	 */
	this.getEntities=function(){
		
		return this.entities;
	};
	
	/**
	 * Clear the list of entities
	 */
	this.clearEntities=function(){
		
		this.entities={};
	};
	
	/**
	 * Get the number of entities in the manager
	 */
	this.getEntitiesSize=function(){
		
		return this.entities.length;
	};
	
	/**
	 * Add a solid into the list
	 * @param solid The solid we are adding
	 */
	this.addSolid= function(solid){
		
		this.solids.push(solid);
	};
	
	/**
	 * Get the list of solids
	 */
	this.getSolids=function(){
		
		return this.solids;
	};
	
	/**
	 * Clear the list of solids
	 */
	this.clearSolids=function(){
		
		this.solids={};
	};
	
	/**
	 * Get the number of solids
	 */
	this.getSolidsSize=function(){
		
		return this.solids.length;
	};
	
	/**
	 * Clear the solids and entities list and delete the user from the EntityManager
	 */
	this.clearAll=function(){
		
		this.entities={};
		this.solids={};
		this.user=null;
		this.background=null;
	};
	
	/**
	 * Draw all the element in the Entity Manager
	 */
	this.drawEntities=function(){
		
		if(this.background!=null){
			this.background.draw();
		}
			
		if(this.user!=null){
			this.user.draw();
		}
		
		if(this.entities!=null && this.entities.length>0){
			for(var i=0; i<this.entities.length; i++){
				entities[i].draw();
			}
		}
		
		if(this.solids!=null && this.solids.length>0){
			for(var i=0; i<this.solids.length; i++){
				solids[i].draw();
			}
		}
		
	};
	
	
};

