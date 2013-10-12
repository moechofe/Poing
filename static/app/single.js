define(['bricks','board','balls','game','render','cfg','env'], function(Bricks,Board,Balls,Game,Render,cfg,env){

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
	Balls.reset().setUpLeft().rotateAt(5);
	Balls.setUpLeft().placeAt(10,10).rotateAt(10);
	Balls.setUpLeft().placeAt(20,10).rotateAt(22).addIteration(-3);
	Balls.setUpLeft().placeAt(30,10).rotateAt(33).addIteration(2);
	Balls.setUpLeft().placeAt(50,10).rotateAt(34).addIteration(-1);
	Balls.setUpLeft().placeAt(80,10).rotateAt(57).addIteration(-4);

	Bricks.reset().setUpLeft();

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
