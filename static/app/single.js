define(['board','game','render','env'], function(Board,Game,Render,env){

var single = null;
var draw = null;

function Single(){}

Single.prototype = {

init: function SingleInit()
{
	draw = this.draw.bind(this);
},

reset: function SingleReset()
{
	Balls.reset().setUpLeft();
	return this;
},

start: function SingleStart()
{
	console.log('Start single game');
	window.requestAnimationFrame(draw);
},

draw: function SingleDraw()
{
	Render
		.clear(Render.balls)
		.drawImage(Render.balls,100,100,Game.ball);
	window.requestAnimationFrame(draw);
}

};

single = new Single;
if(env.debug) window.Single = single;
return single;

});
