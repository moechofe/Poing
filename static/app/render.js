define(['cfg','env'], function(cfg,env){

var render = null;

function Render()
{
	// Size of all the canvas
	this.width = 0;
	this.height = 0;

	// 2D context objects
	this.balls = null;
	this.collides = null;

	this.scale = 0;
}

Render.prototype = {

init: function RenderInit(id, document, window, width, height)
{
	var canvas = document.getElementById(id);

	var balls = document.createElement('canvas');
	var collides = document.createElement('canvas');

	var scale = 1;

	this.width = width * scale;
	this.height = height * scale;

	this.scale = scale - 1;

	balls.width = this.width;
	balls.height = this.height;
	collides.width = this.width;
	collides.height = this.height;

	canvas.appendChild(collides);
	canvas.appendChild(balls);

	this.balls = balls.getContext('2d');
	this.collides = collides.getContext('2d');

	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
	{
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
	{
		var currTime = 0;
		var timeToCall = 0;
		var id = 0;
		window.requestAnimationFrame = function(callback, element)
		{
			currTime = new Date().getTime();
			timeToCall = Math.max(0, 16 - (currTime - lastTime));
			id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) { clearTimeout(id); };
},

clear: function RenderClear(context)
{
	context.clearRect(0,0,context.canvas.width,context.canvas.height);
},

cover: function RenderClear(context, style)
{
	context.fillStyle = style;
	context.fillRect(0,0,context.canvas.width,context.canvas.height);
},

rect: function RenderRect(context, x,y,w,h, style)
{
	context.fillStyle = style;
	context.clearRect(x,y,w,h);
},

drawImage: function RenderDrawImage(context, x, y, sprite)
{
	context.drawImage(sprite[this.scale], x, y);
}

};

render = new Render;
if(env.debug) window.Render = render;
return render;

});
