define(['cfg'], function(cfg){

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
},

free: function BallFree()
{
	Ball.Balls.freeOne(this.i);
}

};

return Ball;

});
