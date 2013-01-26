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
		
		user=entityManager.getUser();
		entities=entityManager.getEntities();
		solids=entityManager.getSolids();
		
		
		
		
		
	};
	
	
};