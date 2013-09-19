define(['board','balls','game','render','env'], function(Board,Balls,Game,Render,env){

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
	return this;
},

start: function SingleStart()
{
	console.log('Start single game');
	window.requestAnimationFrame(draw);
	Render.cover(Render.balls,'rgba(0,0,0,1)');
},

draw: function SingleDraw()
{
	Balls.update();
	//Render.cover(Render.balls,'rgba(0,0,0,0.1)');
	/*b = Balls.len;
	while(b--)
		if(Balls.used[b])
		{
			Render.drawImage(Render.balls, Balls.list[b].x, Balls.list[b].y, Game.ball);
			Balls.list[b].update();
		}*/
	window.requestAnimationFrame(draw);
}

};

single = new Single;
if(env.debug) window.Single = single;
return single;

});
