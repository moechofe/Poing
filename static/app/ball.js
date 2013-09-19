define(['render','calc','cfg'], function(Render,Calc,cfg){

// Current computed coords in pixel
var x = 0;
var y = 0;

// Repeat counter
var r = 0;

function Ball(i, container)
{
	// Index of the Ball in the Balls.list
	this.i = i;

	// Real coords in float
	this.rx = 0.0;
	this.ry = 0.0;

	// Cached speed
	this.sx = 0.5;
	this.sy = 0.25;

	// Last displayed coords in pixel
	this.lx = 0;
	this.ly = 0;

	// Iteration aka speed
	this.r = 3;

	// Angle & Speed
	this.a = 0.0;
	this.s = 0;
}

Ball.prototype = {

// Reference to the Sprite object.
sprite: null,

// Reference to the container object.
list: null,

init: function BallInit()
{
},

placeAt: function BallPlaceAt(x,y)
{
	this.x = x;
	this.y = y;
	return this;
},

aimTo: function BallAimTo(a)
{
	this.a = a;
	return this;
},

rotateTo: function BallRotateTo(a)
{
	this.a = Calc.mod(this.a + a);
},

throwOut: function BallThrowOut(s)
{
	this.s += s;
	return this;
},

update: function BallUpdate()
{
	// XXX: This only work with one ball.
	Render.cover(Render.balls,cfg.ballsCover);
	// TODO: cache this result
	//x = Calc.cos[this.a];
	//y = Calc.sin[this.a];

	r = this.r;
	if(r) while(r--)
	{
		this.x += this.sx;
		this.y += this.sy;

		// This should create garbage
		x = ~~this.x;
		y = ~~this.y;

		if(x != this.lx || y != this.ly)
		{
			this.lx = x;
			this.ly = y;
			// XXX: This only work with one ball.
			//Render.cover(Render.balls,'rgba(0,0,0,0.01)');
			Render.drawImage(Render.balls, x, y, Ball.sprite);
		}
	}
},

free: function BallFree()
{
	Ball.list.freeOne(this.i);
}

};

return Ball;

});
