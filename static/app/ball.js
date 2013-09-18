define(['render','calc','cfg'], function(Render,Calc,cfg){

// Current computed coords in pixel
var x = 0;
var y = 0;

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

// Reference te the Sprite object.
ball: null,

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

throwOut: function BallThrowOut(s)
{
	this.s += s;
	return this;
},

update: function BallUpdate()
{
	// TODO: cache this result
	//x = Calc.cos[this.a];
	//y = Calc.sin[this.a];

	this.x += this.sx;
	this.y += this.sy;

    x = ~~this.x;
    y = ~~this.y;

    if(x != this.lx || y != this.ly)
    {
        this.lx = x;
        this.ly = y;
        Render.drawImage(Render.balls, x, y, Ball.ball);
    }


},

free: function BallFree()
{
	Ball.Balls.freeOne(this.i);
}

};

return Ball;

});
