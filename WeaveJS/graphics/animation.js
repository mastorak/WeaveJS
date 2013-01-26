/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */

/**
 * Animation class
 * 
 * @param imageSrc The image holding the animation frames
 * @param frames The number of frames for the animation
 * @param startX The x coordinates from where we start counting the frame
 * @param startY The y coordinates from where we start counting the frame
 * @param frameW The frame's width
 * @param frameH The frames height
 * @param offsetX The offset for drawing on the x axis
 * @param offsetY The offset for drawing on the y axis
 * @returns
 */
function Animation(imageSrc,frames,startX,startY,frameW,frameH,offsetX,offsetY){
	
	this.frames=frames;
	this.startX=startX;
	this.startY=startY;
	
	this.image=new Image();
	this.image.src=imageSrc;
	this.frameW=frameW;
	this.frameH=frameH;
	this.offsetX=offsetX;
	this.offsetY=offsetY;
	
	
}