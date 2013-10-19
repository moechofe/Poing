define(['render','cfg','env'], function(Render,cfg,env){

// References to the canvas context use to check the collisions.
var collides = null;

// Singleton instance of the Collision object.
var collision = null;

var height = 0;
var top = 0;
var bottom = 0;

function Collision()
{
}

Collision.prototype = {

init: function CollisionInit(c, board)
{
	collides = c;
	top = cfg.borderThickness
	bottom = board.height - cfg.borderThickness - cfg.borderThickness;
},

test: function CollisionTest(x,y, ball)
{
	if(x < top)
	{
		console.warn("Ball inside the top border");
		ball.ry += 1;
		return this.horizontal(ball);
	}
	else if(x <= top) return this.horizontal(ball);
	else if(x > bottom)
	{
		console.warn("Ball inside the bottom border");
		ball.ry -= 1;
		return this.horizontal(ball);
	}
	else if(x >= bottom) return this.horizontal(ball);

},

horizontal: function CollisionHorizontal(ball)
{
	ball.sy = -ball.sy;
	return true;
}

};

collision = new Collision();
if(env.debug) window.Collision = collision;
return collision;

});
