define(['render','calc','cfg','env'], function(Render,Calc,cfg,env){
// {{{ - locals

// Current computed coords in pixel
var x = 0;
var y = 0;

// Repeat counter
var r = 0;

// Index in the cfg.collidesReactions object
var c = 0;

// Reference to a cfg.collidesReaction object
var reaction = null;

// Index in the matchModel function
var i = 0;

var match = true;

// }}}
// {{{ Ball()

function Ball(i)
{
	// Index of the Ball in the Balls.list
	this.i = i;

	// Real coords in float
	this.rx = 0.0;
	this.ry = 0.0;

	// Cached speed
	this.sx = 0.0;
	this.sy = 0.0;

	// Last displayed coords in pixel
	this.lx = 0;
	this.ly = 0;

	// Iteration aka speed
	this.r = 5;

	// Angle
	this.a = 0.0;
}

// }}}
Ball.prototype = {
// {{{ - properties

// Reference to the Sprite object.
sprite: null,

// Reference to the container object.
container: null,

// }}}
// {{{ .init()

init: function BallInit()
{
},

// }}}
// {{{ .placeAt(), .rotateAt(), .rotateTo(), .addIteration()

placeAt: function BallPlaceAt(x,y)
{
	this.rx = x;
	this.ry = y;
	return this;
},

rotateAt: function BallAimTo(a)
{
	this.a = a;
	return this.computeSpeed();
},

rotateTo: function BallRotateTo(a)
{
	this.a = Calc.mod(this.a + a);
},

addIteration: function BallAddIteration(r)
{
	this.r += r;
	if(this.r<0) this.r = 1;
},

// }}}
// {{{ .computeSpeed()

computeSpeed: function BallComputeSpeed()
{
	this.sx = Calc.cos[this.a];
	this.sy = Calc.sin[this.a];
	return this;
},

// }}}
// {{{ .update()

update: function BallUpdate(num)
{
	// Loop using the speed of the ball
	r = this.r;
	if(r) while(r--)
	{
		// Update real coords
		this.rx += this.sx;
		this.ry += this.sy;

		// Pixelate the coords
		// This should create garbage
		x = ~~this.rx;
		y = ~~this.ry;

		// If a new ball can be rendered at a new position
		if(x != this.lx || y != this.ly)
		{
			// Cache the new positions
			this.lx = x;
			this.ly = y;

			Render.drawSprite(Render.balls, x-1, y-1, Ball.sprite);
			if(env.debug) Render.rect(Render.balls, x,y,1,1, '#f00');

			// Test collisions
			x--; y--;
			// This will create garbage
			var pixels = Render.collides.getImageData(x,y,3,3).data;
			var model = new Uint32Array(pixels.buffer)

			for(c=0; c<cfg.collidesReactions.length; c++)
			{
				reaction = cfg.collidesReactions[c];
				i = 9;
				match = this.matchModel(reaction.model, model);
				if(match)
				{
					reaction.apply(this);
				}
			}

		}
		// Avoid following iteration
		else break;
	}
},

// }}}
// {{{ .matchModel()

matchModel: function matchModel(model, source)
{
	i = 9;
	while(i--)
		if((model[i] && !source[i]) || (!model[i] && source[i]))
			return false;
	return true;
},

// }}}
// {{{ .free()

free: function BallFree()
{
	Ball.container.freeOne(this.i);
}

// }}}
};
// {{{ - instance

return Ball;

// }}}
});
