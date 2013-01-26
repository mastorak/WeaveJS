/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */


function Background(screen,type){
		
	
	this.screen=screen;
	this.type=type;
	
	this.width=screen.width;
	this.height=screen.height;
	
	if(this.type=="day")
		this.color="#d0e7f9";
	if(this.type=="night")
		this.color="#000000";
	
	
	
	this.draw =function() {
		
			//assign the color  
			ctx.fillStyle = this.color; 
			
			//start drawing
			ctx.beginPath();  
			//select a rectangle for the whole screen
			ctx.rect(0, 0, this.width, this.height);  
			//stop drawing
			ctx.closePath();  
			//fill with the color we assigned
			ctx.fill();  			
			
			
		
	};
	
	
}