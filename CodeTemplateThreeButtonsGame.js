$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var wc = $("#canvas").width();
	var hc = $("#canvas").height();
	var mx, my;
	
	var b1
	var b1x = 11
	var b1y = 5
	var w = 200
	var h = 150
	
	var b2
	var b2x = 221
	var b2y = 5
	
	var b3
	var b3x = 432
	var b3y = 5
	
	var b4
	var b4x = 11
	var b4y = 165
	
	var b5
	var b5x = 221
	var b5y = 165
	
	var b6
	var b6x = 432
	var b6y = 165

	var b7
	var b7x = 11
	var b7y = 325

	var b8
	var b8x = 221
	var b8y = 325
	
	var b9
	var b9x = 432
	var b9y = 325

	
	var scren = 1
	var scren2 = 2
	
	var player1 = 1
	var player2 = 2
	
	var cb;
	
	
	var c1 = 'red'
	var c2 = 'orange'
	var c3 = 'yellow'
	var c4 = 'green'
	var c5 = 'blue'
	var c6 = 'purple'
	var c7 = 'pink'
	var c8 = 'brown'
	var c9 = 'grey'
	
	var turn
	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{
		
		
	//////////
	///STATE VARIABLES
	

	cb='black';
	
	
	c1 = 'red'
	c2 = 'orange'
	c3 = 'yellow'
	c4 = 'green'
	c5 = 'blue'
	c6 = 'purple'
	c7 = 'pink'
	c8 = 'brown'
	c9 = 'grey'
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	
	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
	if (scren == 1) {	
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, wc, hc);	
	
		ctx.fillStyle = c1;
		ctx.fillRect (b1x, b1y, w, h);
		
		ctx.fillStyle = c2 ;
		ctx.fillRect (b2x, b2y, w, h)  ; 
		
		ctx.fillStyle = c3 ;
		ctx.fillRect (b3x, b3y, w, h)  ; 
	 
		ctx.fillStyle = c4 ;
		ctx.fillRect (b4x, b4y, w, h) ;
	
		ctx.fillStyle = c5 ;
		ctx.fillRect (b5x, b5y, w, h) ;
	
		ctx.fillStyle = c6 ;
		ctx.fillRect (b6x, b6y, w, h) ;
	
		ctx.fillStyle = c7 ;
		ctx.fillRect (b7x, b7y, w, h) ;
	
		ctx.fillStyle = c8 ;
		ctx.fillRect (b8x, b8y, w, h) ;
	
		ctx.fillStyle = c9 ;
		ctx.fillRect (b9x, b9y, w, h)   ;
	 
}
	
	 else if (scren2 == 2) {
	 ctx.fillStyle = 'white'

	 ctx.fillRect = "alert" } ;
	 
	 
	 
		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	

	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	




	/////////////////
	// Mouse Click
	///////////////
	
		canvas.addEventListener('click', function (evt){
		/*
		Apparently, fixing your syntax helped
		Just do the rest like the three
		You can take out the commented fillRects
		- A
		*/
		if (mx > b1x && mx < b1x + w && my > b1y && my < b1y + h) {
			c1 = cb;
			//ctx.fillRect = (b1x, b1y, w, h); 
		}
		if (mx > b2x && mx < b2x + w && my > b2y && my < b2y + h) {
			c2 = cb;
			//ctx.fillRect =  (b2x, b2y, w, h); 
		}
		if (mx > b3x && mx < b3x + w && my > b3y && my < b3y + h) {
			c3 = cb;
			//ctx.fillRect = (b3x, b3y, w, h); 
		}
		if (mx > b4x && mx < b4x + w && my > b4y && my < b4y + h) {
			c4 = cb;
			//ctx.fillRect=(b4x, b4y, w, h); }
		}	
		if (mx > b5x && mx < b5x + w && my > b5y && my < b5y + h) {
			c5 = cb;
			//ctx.fillRect = (b5x, b5y, w, h); }
		}	
		if (mx > b6x && mx < b6x + w && my > b6y && my < b6y + h) {
			c6 = cb;
			//ctx.fillRect = (b6x, b6y, w, h); }
		}	
		if (mx > b7x && mx < b7x + w && my > b7y && my < b7y + h) {
			c7 = cb;
			//ctx.fillRect = (b7x, b7y, w, h); }
		}	
	    if (mx > b8x && mx < b8x + w && my > b8y && my < b8y + h) {
			c8 = cb;
			//ctx.fillRect = (b8x, b8y, w, h); }
		}	
		if (mx > b9x && mx < b9x + w && my > b9y && my < b9y + h) {
			c9 = cb;
			//ctx.fillRect = (b9x, b9y, w, h); }	
		}	
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})
