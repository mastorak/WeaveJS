/*
 * WeaveJS
 * @author Konstantinos Mastorakis
 */



//TODO encapsulate screen information(width, height, etc) on a variable in order to use the created engine object for other purposes such as incorporate game loop
 

//include libraries
document.write('<script type="text/javascript" src="../WeaveJS/util/includes.js"></script>');

var ctx;
var entityManager;

function setupEngine(width,height,element){
	
	this.width=width;
	this.height=height;
	
	
//get the canvas element and set the context
c = document.getElementById(element),   
ctx = c.getContext('2d');  

//set the screen params
c.width = width;  
c.height = height;  


entityManager=new EntityManager();


};
