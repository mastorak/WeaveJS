/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */


/** 
 * A basic implementation of a table class to put and get items
 * 
 */
function Table(){
	
	this.length=0;
	this.items={};
	
	/**
	 * Check to see if the table has a certain key
	 * @param key the key of the item
	 */
	this.hasKey=function(key){
		return this.items.hasOwnProperty(key);		
	};
	
	/**
	 * Put an item in the table
	 * @param key the key of the item
	 * @param value the stored item
	 */
	this.put=function(key,value){
	
	        if (!this.hasKey(key)) {
	        	this.length++;
	        }
	        
	        this.items[key] = value;
	
	};
	
	/**
	 * Get the item from a table 
	 * @param key the key of the item 
	 */
	this.get=function(key){
		 return this.hasKey(key) ? this.items[key] : undefined;
	};
	
	
	this.reset = function(){
	        this.items = {};
	        this.length = 0;
	};
	
	/**
	 * Get the size of the table 
	 */
	this.getSize=function(){
		return this.length;
	};
}