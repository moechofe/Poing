define(['cfg','env'], function(cfg,env){

var render = null;

function Render()
{
	this.canvas = {
		balls: null
	};

	// 2D context objects
	this.balls = null;

	this.scale = 1;
}

Render.prototype = {

init: function RenderInit(id, document, window, width, height)
{
	var canvas = document.getElementById(id);

	var balls = document.createElement('canvas');
	balls.width = width;
	balls.height = height;

	canvas.appendChild(balls);

	this.balls = balls.getContext('2d');
},

drawImage: function RenderDrawImage(image, x, y)
{

}

};

render = new Render;
if(env.debug) window.Render = render;
return render;

});
