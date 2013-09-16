define(['cfg','env'], function(cfg,env){

var render = null;

function InstallRequestAnimationFrame(window) {
};

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

drawImage: function RenderDrawImage(image, x, y)
{

}

};

render = new Render;
if(env.debug) window.Render = render;
return render;

});
