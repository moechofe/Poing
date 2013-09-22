define(['board','balls','game','render','cfg','env'], function(Board,Balls,Game,Render,cfg,env){

var single = null;
var draw = null;

var b = 0;

function Single(){}

Single.prototype = {

init: function SingleInit()
{
	draw = this.draw.bind(this);
},

reset: function SingleReset()
{
	Balls.reset().setUpLeft().throwOut(3);
	Balls.setUpLeft().placeAt(10,10).throwOut(3);
	Balls.setUpLeft().placeAt(20,10).throwOut(3);
	Balls.setUpLeft().placeAt(30,10).throwOut(3);
	Balls.setUpLeft().placeAt(50,10).throwOut(3);
	Balls.setUpLeft().placeAt(80,10).throwOut(3);
	return this;
},

start: function SingleStart()
{
	console.log('Start single game');

	Render.cover(Render.balls, cfg.ballsClear);
	Render.clear(Render.collides);

	Board.update();

	window.requestAnimationFrame(draw);
},

draw: function SingleDraw()
{
	Balls.update();

	window.requestAnimationFrame(draw);
}

};

single = new Single;
if(env.debug) window.Single = single;
return single;

});
