define(['calc','cfg'], function(Calc,cfg){

var x = 0;
var y = 0;

function Ball(i, container)
{
	// Index of the Ball in the Balls.list
	this.i = i;

	// Coords
	this.x = 0.0;
	this.y = 0.0;

	// Angle & Speed
	this.a = 0.0;
	this.s = 0.0;
}

Ball.prototype = {

Balls: null,

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
	x = Calc.cos[this.a];
	y = Calc.sin[this.a];

	x *= this.s;
	y *= this.s;

	x = ~~x;
	y = ~~y;

	this.x += x;
	this.y += y;
},

free: function BallFree()
{
	Ball.Balls.freeOne(this.i);
}

};

return Ball;

});
