define(['sprite','env'], function(Sprite,env){

var game = null;

function Game()
{
	// Reference to the Sprite object for a ball.
	this.ball = null;

	// List of reference to the Sprite objects for a brick.
	this.bricks = null;
}

Game.prototype = {

init: function GameInit(num_bricks)
{
	game.ball = new Sprite();

	game.bricks = new Array(num_bricks);
	if(num_bricks) while(num_bricks--) game.bricks[num_bricks] = new Sprite();
}

};

game = new Game;
if(env.debug) window.Game = game;
return game;

});
