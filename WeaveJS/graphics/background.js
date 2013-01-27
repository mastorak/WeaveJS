/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */


function Background(type){
		
		
	width=weavejs.getScreenWidth();
	height=weavejs.getScreenHeight();
	
	if(type=="day")
		color="#d0e7f9";
	if(type=="night")
		color="#000000";
	
	
	weavejs.getEntityManager().setBackground(this);
	
	this.draw =function() {
		
			//assign the color  
			weavejs.getCanvasContext().fillStyle = color; 
			
			//start drawing
			weavejs.getCanvasContext().beginPath();  
			//select a rectangle for the whole screen
			weavejs.getCanvasContext().rect(0, 0, width, height);  
			//stop drawing
			weavejs.getCanvasContext().closePath();  
			//fill with the color we assigned
			weavejs.getCanvasContext().fill();  			
			
			
		
	};
	
	
}