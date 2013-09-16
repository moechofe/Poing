define(['sprite','env'], function(Sprite,env){

var game = null;

function Game()
{
	this.ball = null;
}

Game.prototype = {

init: function GameInit()
{
	game.ball = new Sprite()
}

};

game = new Game;
if(env.debug) window.Game = game;
return game;

});
