define(['ball','render','cfg','env'], function(Ball,Render,cfg,env){

var i = 0;

// Singleton instance of the Balls object.
var balls = null;

function Balls(length)
{
	// List of available Balls
	this.len = length;
	this.used = new Uint8Array(length);
	this.list = new Array(length);

	// Counter of free Balls
	this.free = length;

	// Counter of used Balls
	this.num = 0;

	// Index of the next available Ball
	this.next = 0;

	this.fake = null;
}

Balls.prototype = {

init: function BallsInit(ball_sprite)
{
	Ball.sprite = ball_sprite;
	Ball.container = balls;
	i = this.len;
	while(i--)
	{
		this.used[i] = false;
		this.list[i] = new Ball(i);
	}
	this.fake = new Ball(false);
},

reset: function BallsReset()
{
	i = this.len;
	while(i--)
		this.used[i] = false;
	return this;
},

update: function BallsUpdate()
{
	Render.cover(Render.balls, cfg.ballsCover);
	i = this.len
	while(i--)
		if(this.used[i])
			this.list[i].update(this.num);
},

setUpLeft: function BallsSetUpLeft()
{
	return this.addOne().placeAt(100,100);
},

nextFree: function BallsNextFree()
{
	if(!this.free) return false;

	while(this.used[this.next])
		if(++this.next > this.len)
			this.next = 0;

	return true;
},

addOne: function BallsAddOne()
{
	if(this.nextFree())
	{
		this.num++;
		this.free--;
		this.used[this.next] = true;
		return this.list[this.next];
	}
	return this.fake;
},

freeOne: function BallsFreeOne(index)
{
	this.used[index] = true;
	this.free++;
	this.num--;
}

};

balls = new Balls(cfg.ballMax);
if(env.debug) window.Balls = balls;
return balls;

});
